import AdminAuthModel from '../models/adminAuth.models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const registerAdmin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
      }
  
      if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters.' });
      }
  
      const existingAdmin = await AdminAuthModel.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists with this email.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newAdmin = await AdminAuthModel.create({
        email,
        password: hashedPassword,
      });
  
      res.status(201).json({
        message: 'Admin registered successfully.',
        admin: { id: newAdmin._id, email: newAdmin.email },
      });
  
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };


export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const existing = await AdminAuthModel.findOne({ email });
    if (!existing) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isPasswordMatch = await bcrypt.compare(password, existing.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign(
      { id: existing._id, email: existing.email },
      process.env.JWT_SECRET || 'defaultsecret',
      { expiresIn: '1h' }
    );


    res.status(200).json({
      message: 'Login successful',
      token,
      user: { email: existing.email, id: existing._id },
    });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
