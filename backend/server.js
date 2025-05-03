import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/DB.js';
import AuthRoutes from './routes/auth.routes.js'
import NewsletterRoutes from './routes/newsletter.routes.js'
dotenv.config();

const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://admin.smallestlibraryinafrica.org' ,'https://smallestlibraryinafrica.org'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
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



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
