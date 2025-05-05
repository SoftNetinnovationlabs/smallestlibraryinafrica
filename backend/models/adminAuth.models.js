import mongoose from 'mongoose';

const adminAuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'admin',
  }
}, {
  timestamps: true
});

const AdminAuthModel= mongoose.model('Admin', adminAuthSchema);

export default AdminAuthModel;
