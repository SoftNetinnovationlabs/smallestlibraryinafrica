import AuthModel from '../models/auth.models.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// REGISTER
export const AuthController = async (req, res) => {
  const { fullName, email, phoneNumber, password } = req.body;

  try {
    const existingUser = await AuthModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new AuthModel({
      fullName,
      email,
      password: hashedPassword,
      phoneNumber
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        phoneNumber: newUser.phoneNumber,
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await AuthModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'The email does not exist' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      user: {
        id: existingUser._id,
        fullName: existingUser.fullName,
        email: existingUser.email,
        phoneNumber: existingUser.phoneNumber,
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
