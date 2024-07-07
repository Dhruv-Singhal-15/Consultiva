import express from 'express'

import { predictDisease } from '../controllers/predictController.js';

const router = express.Router();

router.post('/',predictDisease);

export default router;