import AdminAuthModel from '../models/adminAuth.models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters.' });
    }

    const existing = await AdminAuthModel.findOne({ email });
    if (!existing) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, existing.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    // Optional: Generate a JWT token
    const token = jwt.sign(
      { id: existing._id, email: existing.email },
      process.env.JWT_SECRET || 'yoursecretkey',
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Login successful', token, user: existing });

  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
