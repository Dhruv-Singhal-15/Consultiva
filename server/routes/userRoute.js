import express from 'express'
import { signupUser,loginUser,forgotpass,resetPassword } from '../controllers/userController.js';

const router = express.Router()

router.post('/signup',signupUser)
router.post('/login',loginUser)
router.post('/forgot-password',forgotpass)
router.post('/reset-password/:token',resetPassword)

export default router;