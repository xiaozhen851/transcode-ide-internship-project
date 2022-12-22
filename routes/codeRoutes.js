import express from "express"
const router = express.Router()

import {GetCode} from "../controllers/codeController.js"


router.route("/answer").get(GetCode)

export default router
