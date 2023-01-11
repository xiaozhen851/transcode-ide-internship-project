import express from "express"
const router = express.Router()

import { runCode, GetCode, test } from "../controllers/codeController.js"

router.route("/runs").post(runCode);
router.route("/answer").get(GetCode)
router.route("/test").get(test)

export default router
