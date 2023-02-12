import express from 'express';
const router = express.Router()

import { log, lastRecord } from '../controllers/logController.js';
import authenticatedUser from "../middleware/auth.js";

router.route("/create").post(log);
router.route("/lastRecord").post(authenticatedUser, lastRecord);

export default router;
