import { StatusCodes } from 'http-status-codes';
import BadRequestAPIError from '../errors/bad-request-error.js';
import Problem from '../models/Problem.js';

const getQuestionList = async (req, res) => {
    const questions = await Problem.find({});

    res.status(StatusCodes.OK).json({
      questions,
    });
}

const getQuestion = async (req, res) => {
    const { id } = req.body
    if (!id) {
        throw new BadRequestAPIError('Please provide the question ID')
    }

    const question = await Problem.findById(id);

    res.status(StatusCodes.OK).json({
        question,
    });
}


export { getQuestion, getQuestionList };
