import express from 'express';
const router = express.Router()

import { log } from '../controllers/logController.js';

router.route("/create").post(log);

export default router;
