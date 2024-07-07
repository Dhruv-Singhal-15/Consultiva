import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import predictRoute from './routes/predictRoute.js';


const app = express();
const PORT = process.env.PORT || 5001;
const CONNECTION_URL = 'mongodb+srv://dhruv:AtlasPass@cluster0.1ofxema.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// Middleware
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/predict',predictRoute);


//the server will start only when connection to database is true
mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error));

//mongoose.set('useFindAndModify',false);



// Route to interact with Flask API
// app.post('/predict', async (req, res) => {
//     try {
//         //console.log(req.body.input);
//         const inputSymptoms = req.body.input; 
//         const response = await axios.post('http://localhost:5002/predict', { input: inputSymptoms });
//         //res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// });

// Start the server
//app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
//});
