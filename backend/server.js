import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/DB.js';
import AuthRoutes from './routes/auth.routes.js'
import NewsletterRoutes from './routes/newsletter.routes.js'
import Router from './routes/news.routes.js'
import ContactRoutes from './routes/contact.routes.js'
import DonationRoute from './routes/Donation.routes.js'
dotenv.config();

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://admin.smallestlibraryinafrica.org' ,'https://smallestlibraryinafrica.org'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-admin-secret'], // add your custom headers here
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('App is running');
});
app.use('/api/auth/', AuthRoutes)
app.use('/api/newsletter', NewsletterRoutes)
app.use('/api/news',Router )
app.use('/api', ContactRoutes)
app.use('/api/donation', DonationRoute)



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
