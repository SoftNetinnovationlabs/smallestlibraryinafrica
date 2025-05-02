// authModel.js
import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Optional but useful
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AuthModel = mongoose.model('Auth', authSchema);

export default AuthModel;
