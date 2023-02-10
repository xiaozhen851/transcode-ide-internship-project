import mongoose from 'mongoose';

const ProblemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide problem title'],
        minlength: 3,
        trim: true,
    },
    problem: {
        type: String,
        required: [true, 'Please provide problem title'],
        minlength: 3,
        unique: true,
    },
})

export default mongoose.model("Problem", ProblemSchema);
