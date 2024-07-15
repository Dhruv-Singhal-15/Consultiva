import bcrypt from "bcrypt";
import { User } from '../models/User.js'
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from 'nodemailer'

dotenv.config()

export const signupUser = async (req, res) => {
    const { username, email, password } = req.body
    const user = await User.findOne({ email })
    if (user) {
        return res.json({ message: "user already existed" })
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const newUser = new User({
        username, 
        email, 
        password: hashpassword,
    })

    await newUser.save();
    return res.json({status: true, message: "User Created !"})

}


export const loginUser = async (req, res) =>{
    const {email,password} = req.body;
    console.log(req.body);
    const user = await User.findOne({email})
    if(!user){
        return res.json({message: "User isn't registered"})
    }

    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.json({message: "Password is incorrect!"})
    }

    const token = jwt.sign({username: user.username}, process.env.JWT_KEY, {expiresIn: '1h'} ) 
    res.cookie('token', token, {httpOnly: true, maxAge: 360000}) //httponly makes sure that cannot login through javascript code
    return res.json({status: true, message: "Login Successfully"})

}

export const forgotpass = async (req,res) =>{
    const {email} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.json({message: "user not registered"})
        }

        const token = jwt.sign({id: user._id},process.env.JWT_KEY,{expiresIn:'5m'})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_PASS
            }
          });
          
          var mailOptions = {
            from: 'dhruvsinghal1510@gmail.com',
            to: email,
            subject: 'Reset Password',
            text: `This is your link to reset your password: http://localhost:3000/resetPassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return res.json({message: "error sending mail :("})
            } else {
                return res.json({status: true,message: "email sent :)"})
            }
          });
          
    }catch(err){
        console.log(err)
    }
}

export const resetPassword = async (req,res) => {
    const {token} = req.params;
    const {password} = req.body
    try{
        const decoded = jwt.verify(token,process.env.JWT_KEY);
        const id = decoded.id;
        const hashpassword = await bcrypt.hash(password,10)
        await User.findByIdAndUpdate({_id:id},{password: hashpassword})
        return res.json({status: true ,message: "Updated the password"})
    }catch(err){
        return res.json("invalid token") //token expired after 5 mins
    }
}