import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './lib/db.js'
import campaignRoutes from './routes/campaign.routes.js';
import donorRoutes from './routes/donor.routes.js'
import paymentRoutes from './routes/payment.routes.js'
dotenv.config(); 


const app = express(); 
const port = process.env.PORT || 5000; 

await connectDB(); 

app.use(express.json()); 
app.use(cors());

app.use("/api/campaigns", campaignRoutes);
app.use("/api/donors", donorRoutes);

app.use("/api/payments", paymentRoutes);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})