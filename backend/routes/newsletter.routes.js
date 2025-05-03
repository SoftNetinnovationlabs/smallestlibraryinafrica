import express from 'express';
import {sendNewsletter} from '../controllers/newsletter.controller.js';

const senderNewsletterRouter = express.Router();
senderNewsletterRouter.post('/send', sendNewsletter);

export default senderNewsletterRouter;