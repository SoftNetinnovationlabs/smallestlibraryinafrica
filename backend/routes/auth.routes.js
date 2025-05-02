import express from 'express'
import {AuthController} from '../controllers/Auth.controller.js'
const AuthRoutes = express.Router();

AuthRoutes.post('/register', AuthController)

export default AuthRoutes;