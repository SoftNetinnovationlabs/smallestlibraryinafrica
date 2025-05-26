import express from 'express'
import {initiateDonation,handleMpesaCallback } from '../controllers/Donation.controller.js'

const DonationRoute = express.Router();

DonationRoute.post('/donation', initiateDonation)
DonationRoute.post('/donation/callback', handleMpesaCallback)

export  default DonationRoute
