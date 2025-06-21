import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
        trim: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    targetAmount: {
        type: Number, 
        required: true
    }, 
    currentAmount: {
        type: Number, 
        default: 0
    }, 
    createdAt: {
        type: Date, 
        default: Date.now
    }
}); 

const Campaign = mongoose.model("Campaign", campaignSchema)
export default Campaign