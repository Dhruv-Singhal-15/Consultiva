import axios from 'axios';

export const predictDisease = async (req, res) => {
    try {
        //console.log(req.body.input);
        const inputSymptoms = req.body.input; 
        const response = await axios.post('http://localhost:5002/predict', { input: inputSymptoms });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error });
    }
}