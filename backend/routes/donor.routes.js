import express from 'express'; 
import { createDonor } from '../controllers/donor.controller.js';

const router = express.Router(); 

router.post('/', createDonor)

export default router