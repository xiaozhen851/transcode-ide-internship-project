import { StatusCodes } from "http-status-codes";
import BadRequestAPIError from "../errors/bad-request-error.js"
import { Configuration, OpenAIApi } from "openai";

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



const GetCode = (req,res) =>{
    let question = req.body.question;
    try {
        getAnswer(question).then((response)=>{
            console.log(response.data.choices)
            let answer = {answer:response.data.choices[0].text}
            res.status(StatusCodes.OK).send(answer);
        })
    } catch (error) {
        throw BadRequestAPIError("request fail")
    }
}



export {GetCode}