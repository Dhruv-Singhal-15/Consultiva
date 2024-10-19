import express from "express";
import { verifyUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/dashboard', verifyUser, (req,res)=>{
    // console.log("dashboard ke andr hun", req.user.displayName);
    res.json({status:true, msg:"Welcome to dashboard", user: {displayName: req.user.displayName}})
})

export default router;