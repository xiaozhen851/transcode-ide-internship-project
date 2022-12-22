import express from 'express'
import "express-async-errors"

console.log("server is running")

const app = express()
import dotenv from 'dotenv'
dotenv.config()
import notFoundMiddleware from './middleware/not-found.js'
import errorHandleMiddleware from './middleware/error-handler.js'
import connectionDB from './db/connect.js'
import authRouter from './routes/authRoutes.js'
import codeRouter from "./routes/codeRoutes.js"
import authenticatedUser from "./middleware/auth.js"
import cors from "cors"
import { Configuration, OpenAIApi } from "openai";
import { StatusCodes } from 'http-status-codes'
import BadRequestAPIError from './errors/bad-request-error.js'

//initial of openAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getAnswer(question) {
    return await openai.createCompletion({
        model: "code-davinci-002",
        prompt: question,
        temperature: 0,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
}



app.use(express.json())  //as we posting data so allow we pass json
app.use(cors({
    methods:["GET","POST","DELETE","UPDATE","PUT","PATCH"],
    origin:"http://localhost:3000/",
}));

app.get("/answer", cors(), function (req, res) {
    let question = req.body.question;
    console.log(question)
    try {
        getAnswer(question)
        .then((response) => {
            console.log(response.data.choices)
            let answer = { answer: response.data.choices[0].text};
            res.status(StatusCodes.OK).send(answer);
            // console.log(answer)
        }) 
    } catch (error) {
        throw new BadRequestAPIError("Request fail!")
    }

});


app.use("/api/version1/auth",authRouter)
app.use("/api/version1/code",authenticatedUser,codeRouter)

//middleware

app.use(notFoundMiddleware)
app.use(errorHandleMiddleware)



const port = process.env.PORT || 8000
// app.listen(port, () => console.log(`Server is listening on port ${port}...`))
const start = async() =>{
    try{
        await connectionDB(process.env.MONGO_URL)
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}...`)
        })
    }catch(error){
        console.log(error)
    }
}


start()