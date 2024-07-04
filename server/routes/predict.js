import express from 'express';
import axios from 'axios'; 

const router = express.Router();

// POST /api/predict
router.post('/', async (req, res) => {
    const { input } = req.body; // Assuming input data structure

    try {
        // Example: Make request to Flask endpoint for prediction
        const response = await axios.post('http://localhost:5000/predict', {
            input
        });

        // Return predicted disease or handle response as needed
        res.json(response.data);
    } catch (error) {
        console.error('Error predicting disease:', error);
        res.status(500).json({ error: 'Prediction failed' });
    }
});

export default router;
