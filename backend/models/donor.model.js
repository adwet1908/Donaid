// models/Donor.js

import mongoose from "mongoose";

// Define schema structure for Donor
const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Donor name is required"],
    },
    email: {
      type: String,
      required: [true, "Donor email is required"],
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required by Razorpay"],
    },
    amount: {
      type: Number,
      required: [true, "Donation amount is required"],
    },
    message: {
      type: String,
      default: "",
    },
    campaignId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign", // Reference to the campaign being donated to
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the model
export default mongoose.model("Donor", donorSchema);
