// controllers/donorController.js

import Donor from "../models/donor.model.js";

export const createDonor = async (req, res) => {
  try {
    const { name, email, phone, amount, message, campaignId } = req.body;

    if (!name || !email || !phone || !amount || !campaignId) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    const newDonor = await Donor.create({
      name,
      email,
      phone,
      amount,
      message,
      campaignId,
    });

    
    res.status(201).json({
      success: true,
      message: "Donor information saved successfully.",
      donor: newDonor,
    });
  } catch (error) {
    console.error("Error creating donor:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error while saving donor info.",
    });
  }
};
