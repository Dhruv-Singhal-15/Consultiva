import express from "express";
import { verifyUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/dashboard', verifyUser, (req,res)=>{
    res.json({msg:"Welcome to dashboard", user: {displayName: req.user.displayName}})
})

export default router;