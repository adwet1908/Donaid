import Campaign from "../models/campaign.model.js";

export const createCampaign = async (req, res) => {
  try {
    const { title, description, targetAmount } = req.body;

    // handle missing data
    if (!title || !description || !targetAmount) {
      return res.json({
        success: false,
        message: "Missing Data",
      });
    }

    // create a new campaign instance

    const newCampaign = await Campaign.create({
      title,
      description,
      targetAmount,
    });

    return res.status(200).json({
      success: true,
      newCampaign,
    });
  } catch (error) {
    console.log("error creating campaign", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllCampaigns = async (req, res) => {
  try {
    // query the database
    const data = await Campaign.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log("Error in fetching details.", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCampaignById = async (req, res) => {
  try {
    const { id } = req.params;
    const campaign = await Campaign.findById(id);
    // console.log(campaign)
    if (!campaign) {
      return res
        .status(404)
        .json({ success: false, message: "Campaign not found" });
    }

    return res.status(200).json({
      success: true,
      campaign,
    });
  } catch (error) {
    console.log("Error in getting campaign: ", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCampaignAmount = async (req, res) => {
  try {
    // Extract campaignId from URL parameters
    const { campaignId } = req.params;

    const existingCampaign = await Campaign.findById(campaignId);

    if (!existingCampaign) {
      return res.status(400).json({
        success: false,
        message: "Campaign does not exist.",
      });
    }

    // Extract donation amount from request body
    const { amount } = req.body;
    if (typeof amount !== "number" || amount <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid amount" });
    }

    existingCampaign.currentAmount += amount;
    await existingCampaign.save();

    return res.status(200).json({
      success: true,
      message: "Donation successful.",
      updatedCampaign: existingCampaign,
    });
  } catch (error) {
    console.log("Error updating amount: ", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    const existingCampaign = await Campaign.findById(campaignId);

    if (!existingCampaign) {
      return res.status(400).json({
        success: false,
        message: "Campaign does not exist.",
      });
    }

    await existingCampaign.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Campaign deleted successfully.",
    });
  } catch (error) {
    console.log("Cannot delete the required campaign. ", error)
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
