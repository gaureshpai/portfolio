import mongoose from "mongoose";

const { Schema } = mongoose; 

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    provider: {
        type: String,
        required: true
    }
});

export default mongoose.models.Post || mongoose.model("Post", postSchema); 
