import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from "dotenv";

import predictRoute from './routes/predictRoute.js';
import userRoute from './routes/userRoute.js'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;
const CONNECTION_URL  = process.env.CONNECTION_URL;

// Middleware
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"], //need to specify the frontend server to use credentials
    credentials: true, //to use http cookies
}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/predict',predictRoute);
app.use('/auth',userRoute);

//the server will start only when connection to database is true
mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error));
