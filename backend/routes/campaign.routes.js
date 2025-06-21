import express from "express";
import {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaignAmount,
  deleteCampaign,
} from "../controllers/campaign.controller.js";

const router = express.Router();

router.post("/", createCampaign);
router.get("/", getAllCampaigns);
router.get("/:id", getCampaignById);
router.put("/update/:campaignId", updateCampaignAmount);
router.delete("/delete/:campaignId", deleteCampaign);

export default router;