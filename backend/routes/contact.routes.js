import express from express
import {handleContactForm} from '../controllers/contact.controller.js'

const contactRoutes = express.Router();

contactRoutes.post('/contact', handleContactForm)
export default contactRoutes