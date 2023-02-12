import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    },
    content:{
        type: String,
        required: [true, 'Please provide the logging content'],
    },
    interaction: {
        type: String,
        required: [true, 'Please provide interaction'],
        maxlength: 50,
    },
    response: {
        type: String,
        required: false,
    },
    code: {
        type: String,
        required: false,
    },
    question: {
        type: String,
        ref: 'Problem',
        required: false,
    },
}, { timestamps: true });

export default mongoose.model("Log", LogSchema);
