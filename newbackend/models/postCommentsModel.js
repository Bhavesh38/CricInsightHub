import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
    commentContent: { type: String, required: true },
    likes: { type: Number, default: 0 },
    commentedBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    subComments: [String]
})

const postComments = mongoose.model('postComments', commentSchema);
export default postComments;