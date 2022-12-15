import express from "express"
const router = express.Router()

import {GetCode, SendCode} from "../controllers/codeController.js"

router.route("/sendCode").post(SendCode)

router.route("/getCode").post(GetCode)

export default router
