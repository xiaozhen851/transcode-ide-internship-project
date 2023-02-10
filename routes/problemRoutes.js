import express from 'express';
const router = express.Router()

import { getQuestion, getQuestionList } from '../controllers/problemController.js';

router.route("/desc").post(getQuestion);
router.route("/list").get(getQuestionList);

export default router;
