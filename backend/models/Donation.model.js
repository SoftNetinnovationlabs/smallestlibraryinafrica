import mongoose from 'mongoose'

const DonationSchema = new mongoose.Schema({
    phone: {type: String, required: true},
    amount: {type: String, required: true},
    receipt: {type: String, required: true, unique: true},
    status: {type: String, default: 'Success'},
    date: {type: Date, default: Date.now},

})
const DonationModel = mongoose.model('Doantion', DonationSchema)

export default DonationModel;