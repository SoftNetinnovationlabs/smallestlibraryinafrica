import axios from 'axios';
import moment from 'moment';
import base64 from 'base-64';
import DonationModel from '../models/Donation.model.js';

const consumerKey = process.env.MPESA_CONSUMER_KEY;
const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
const businessShortCode = process.env.MPESA_BUSINESS_SHORT_CODE;
const passkey = process.env.MPESA_PASSKEY;
const lipaNaMpesaUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';

const getAccessToken = async () => {
  const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  const auth = base64.encode(`${consumerKey}:${consumerSecret}`);

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Basic ${auth}` }
    });
    return response.data.access_token;
  } catch (err) {
    console.error(`❌ Error fetching access token`, err.response?.data || err.message);
    throw new Error('Failed to get access token');
  }
};

const getTimestamp = () => {
  return moment().format('YYYYMMDDHHmmss');
};

const getPassword = (timestamp) => {
  const str = businessShortCode + passkey + timestamp;
  return base64.encode(str);
};

// ✅ Initiate Donation
export const initiateDonation = async (req, res) => {
  const { phone, amount } = req.body;

  if (!phone || !amount) {
    return res.status(400).json({ message: 'Phone and amount are required' });
  }

  if (!/^\d{12}$/.test(phone)) {
    return res.status(400).json({
      message: 'Phone number must be 12 digits long (e.g., 2547XXXXXXXX)'
    });
  }

  try {
    const token = await getAccessToken();
    const timestamp = getTimestamp();
    const password = getPassword(timestamp);
    const callbackURL = 'https://api.smallestlibraryinafrica.org/api/donate/callback';

    const stkpushRequest = {
      BusinessShortCode: businessShortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: amount,
      PartyA: phone,
      PartyB: businessShortCode,
      PhoneNumber: phone,
      CallbackURL: callbackURL,
      AccountReference: 'Donation',
      TransactionDesc: 'Donation payment'
    };

    const response = await axios.post(lipaNaMpesaUrl, stkpushRequest, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    res.status(200).json({
      message: 'STK Push initiated. Check your phone.',
      response: response.data
    });
  } catch (error) {
    console.error(' STK Push error', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to initiate donation' });
  }
};

//  Handle Callback
export const handleMpesaCallback = async (req, res) => {
  const stkCallback = req.body?.Body?.stkCallback;

  if (!stkCallback) {
    return res.status(400).json({ message: 'Invalid callback data' });
  }

  const resultCode = stkCallback.ResultCode;
  const resultDesc = stkCallback.ResultDesc;
  const metadata = stkCallback.CallbackMetadata?.Item || [];

  if (resultCode === 0) {
    const amount = metadata.find(i => i.Name === 'Amount')?.Value;
    const phone = metadata.find(i => i.Name === 'PhoneNumber')?.Value;
    const receipt = metadata.find(i => i.Name === 'MpesaReceiptNumber')?.Value;

    console.log(' Payment success:', { phone, amount, receipt });

    try {
      const existing = await DonationModel.findOne({ receipt });
      if (existing) {
        return res.status(200).json({ message: 'Transaction already recorded' });
      }

      const newDonation = new DonationModel({ phone, amount, receipt });
      await newDonation.save();

      return res.status(200).json({ message: 'Payment saved successfully' });
    } catch (error) {
      console.error(' Error saving donation:', error);
      return res.status(500).json({ message: 'Server error saving payment' });
    }
  } else {
    console.log(' Payment failed:', resultDesc);
    return res.status(200).json({ message: 'Payment failed', description: resultDesc });
  }
};
