// middleware/checkAdminSecret.js

import dotenv from 'dotenv';
dotenv.config();

const checkAdminSecret = (req, res, next) => {
  const clientKey = req.headers['x-admin-secret'];

  if (!clientKey || clientKey !== process.env.ADMIN_SECRET_KEY) {
    return res.status(403).json({ message: 'Unauthorized access' });
  }

  next();
};

export default checkAdminSecret;
