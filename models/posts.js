import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});


export default model("Post", PostSchema);