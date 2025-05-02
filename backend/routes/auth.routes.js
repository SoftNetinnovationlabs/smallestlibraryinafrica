import express from 'express'
import {AuthController, login} from '../controllers/Auth.controller.js'
const AuthRoutes = express.Router();

AuthRoutes.post('/register', AuthController)
AuthRoutes.post('/login', login)

export default AuthRoutes;