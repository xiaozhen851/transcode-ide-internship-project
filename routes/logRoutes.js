import express from 'express';
const router = express.Router()

import { log, lastRecord } from '../controllers/logController.js';

router.route("/create").post(log);
router.route("/lastRecord").post(lastRecord);

export default router;
