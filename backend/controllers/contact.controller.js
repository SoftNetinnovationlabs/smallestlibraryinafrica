import { sendEmail } from '../utils/sendEmails.js'; // make sure path & filename are correct
import ContactMessage from '../models/ContactMessage.js';

export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save to MongoDB
    const contact = new ContactMessage({ name, email, message });
    await contact.save();

    // Prepare email content
    const subject = `New message from ${name}`;
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    // Send email notification
    await sendEmail(
      ['smallest@smallestlibraryinafrica.org', 'youandusdev@gmail.com'],
      subject,
      html
    );

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error handling contact form:', error);
    res.status(500).json({ error: 'Failed to save or send message' });
  }
};
