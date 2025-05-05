import express from 'express'
import {AuthController, login} from '../controllers/Auth.controller.js'
import {Login} from '../controllers/adminAuth.controller.js'
const AuthRoutes = express.Router();

AuthRoutes.post('/register', AuthController)
AuthRoutes.post('/login', login)
AuthRoutes.post('/admin-login', Login)

export default AuthRoutes;