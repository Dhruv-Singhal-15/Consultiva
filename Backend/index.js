import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import Session from 'express-session';
import passport from 'passport';

import predictRoute from "./routes/predictRoute.js"
import userRoute from "./routes/userRoute.js"
import protectedRoute from "./routes/protectedRoute.js"
import './config/passport.js';
// const userdb = require("./model/userSchema");
// import {userdb} from "./model/userSchema";
// const clientid =
//   "238877709237-8c63tnd04jn43ifdgd658kgvavp35m5r.apps.googleusercontent.com";
// const clientsecret = "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";

const app = express();
const PORT = 8000;
const DB = process.env.DATABASE_URL;
// const session = require("express-session");


// const OAuth2Strategy = require("passport-google-oauth2").Strategy;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
dotenv.config();

// app.get("/", (req, res) => {
//   res.status(200).json("server is start");
// });

//session setup
// app.use(
//   Session({
//     secret: "12345678",
//     resave: false,
//     saveUninitialized: true,
//   })
// );
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

//setup passport
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new OAuth2Strategy(
//     {
//       clientID: clientid,
//       clientSecret: clientsecret,
//       callbackURL: "/auth/google/callback",
//       scope: ["profile", "email"],
//     },

//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         let user = await userdb.findOne({ googleId: profile.id });

//         if (!user) {
//           user = new userdb({
//             googleId: profile.id,
//             displayName: profile.displayName,
//             email: profile.emails[0].value,
//             image: profile.photos[0].value,
//           });

//           await user.save();
//         }

//         return done(null, user);
//       } catch (error) {
//         return done(error, null);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

// initial google ouath login
// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:3000/dashboard",
//     failureRedirect: "http://localhost:3000/login",
//   })
// );

// app.get("/login/sucess", async (req, res) => {
//   if (req.user) {
//     res.status(200).json({ message: "user Login", user: req.user });
//   } else {
//     res.status(400).json({ message: "Not Authorized" });
//   }
// });

// app.get("/logout", (req, res, next) => {
//   req.logout(function (err) {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("http://localhost:3000");
//   });
// });

app.use('/predict',predictRoute);
app.use('/auth',userRoute);
app.use('/protected',protectedRoute);

mongoose
  .connect(DB)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error connecting to Database!", err));

app.listen(PORT, () => {
  console.log(`server start at port no ${PORT}`);
});
