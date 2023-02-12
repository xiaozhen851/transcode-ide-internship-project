import express from 'express'
import "express-async-errors"

console.log("server is running")

const app = express();
import dotenv from 'dotenv';
dotenv.config();
import notFoundMiddleware from './middleware/not-found.js';
import errorHandleMiddleware from './middleware/error-handler.js';
import connectionDB from './db/connect.js';
import authRouter from './routes/authRoutes.js';
import codeRouter from './routes/codeRoutes.js';
import problemRouter from './routes/problemRoutes.js';
import logRouter from './routes/logRoutes.js';
import authenticatedUser from './middleware/auth.js';
import cors from 'cors';

app.use(express.json())  //as we posting data so allow we pass json
// app.use(express.urlencoded({ extended:false }));

app.use(cors());

app.use("/api/version1/auth", authRouter);
app.use("/api/version1/problem", problemRouter);
app.use("/api/version1/log", authenticatedUser, logRouter);
app.use("/api/version1/code", authenticatedUser, cors(), codeRouter);

//middleware

app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)



const port = process.env.PORT || 8000
// app.listen(port, () => console.log(`Server is listening on port ${port}...`))
const start = async () => {
    try {
        await connectionDB(process.env.MONGO_URL)
        app.listen(port,() => {
            console.log(`Server is running on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()
