import AuthModel from '../models/auth.models.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const  AuthController = async (req, res) => {
    const {fullName, email, phoneNumber, password} = req.body

    try{
        const existingUser = await AuthModel.findOne({email})
        if(existingUser){
          return  res.status(400).json({message: 'user Already exist'})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new AuthModel({
            fullName,
            email,
            password: hashedPassword,
            phoneNumber
        })

        await newUser.save()

        const token = jwt.sign({id: newUser._id},process.env.JWT_SECRET, {expiresIn: '1d'})
        res.status(201).json({
            token, 
            user:{
                id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                phoneNumber: phoneNumber,
            }
        })
    }catch(error){
        res.status(500).json({message: 'internal server error', error: error.message})
    }
}