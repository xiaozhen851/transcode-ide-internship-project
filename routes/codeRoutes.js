import express from "express"
const router = express.Router()

import {GetCode, test} from "../controllers/codeController.js"


router.route("/answer").get(GetCode)
router.route("/test").get(test)

export default router
