// lib/db.js or config/db.js (wherever you want to keep it)
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI);

        // Connection success log
        console.log("Database connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); 
    }
};

export default connectDB;
