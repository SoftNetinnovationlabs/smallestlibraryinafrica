import express from 'express'
import {AuthController, login} from '../controllers/Auth.controller.js'
import {Login, registerAdmin} from '../controllers/adminAuth.controller.js'
import checkAdminSecret from '../middleware/checkAdminSecret.js'
const AuthRoutes = express.Router();

AuthRoutes.post('/register', AuthController)
AuthRoutes.post('/login', login)
AuthRoutes.post('/admin-login', Login)
AuthRoutes.post('/register-admin', checkAdminSecret, registerAdmin);
AuthRoutes.post('/ping', (req,res)=>{
    res.status(200).json({message: "Server is alive"})
})

export default AuthRoutes;