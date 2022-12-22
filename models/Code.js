import mongoose from "mongoose";

const CodeSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    },
    code:{
        type: String,
        required: [true, 'Please provide code sended'],

    },

},
{timestamps:true}
)

export default mongoose.model("Code",CodeSchema)