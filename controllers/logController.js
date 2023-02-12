import { StatusCodes } from 'http-status-codes';
import BadRequestAPIError from '../errors/bad-request-error.js';
import Log from '../models/Log.js';

const log = async (req, res) => {
    const { content, interaction } = req.body;
    if (!content || !interaction) {
        throw new BadRequestAPIError("please provide all values");
    }
    const record = await Log.create(req.body);
    res.status(StatusCodes.OK).json({
        record,
    });
}

const lastRecord = async (req, res) => {
    const { question, user } = req.body;
    // if (!question) {
    //     throw new BadRequestAPIError("please provide question ID");
    // }
    const record = await Log.findOne({ question, createdBy: user }).sort({ createdAt: -1 });
    res.status(StatusCodes.OK).json({
        record,
    });
}

export { log, lastRecord };
