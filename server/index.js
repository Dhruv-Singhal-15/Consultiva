import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to interact with Flask API
app.post('/predict', async (req, res) => {
    try {
        //console.log(req.body.input);
        const inputSymptoms = req.body.input; 
        const response = await axios.post('http://localhost:5002/predict', { input: inputSymptoms });
        //res.json(response.data);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
