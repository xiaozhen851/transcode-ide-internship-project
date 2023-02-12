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

export { log };
