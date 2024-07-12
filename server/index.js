import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import predictRoute from "./routes/predictRoute.js";

const app = express();
const PORT = process.env.PORT || 5001;
const CONNECTION_URL =
  "mongodb+srv://atinderkumar1111:12345@cluster0.didyxku.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/predict", predictRoute);

//the server will start only when connection to database is true

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error));
