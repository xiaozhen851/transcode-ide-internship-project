import { StatusCodes } from "http-status-codes";
import BadRequestAPIError from "../errors/bad-request-error.js"
import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv'
dotenv.config()

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

const test = (req,res) =>{
    res.send("test success!")
}

const GetCode = (req,res) =>{
    let question = req.query.question;
    try {
        getAnswer(question).then((response)=>{
            let answer = {answer:response.data.choices[0].text}
            res.status(StatusCodes.OK).send(answer);
        })
    } catch (error) {
        throw BadRequestAPIError("Request fail")
    }
}



export {GetCode,test}