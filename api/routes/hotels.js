import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotelController.js";
const router = express.Router();
import { verifyAdmin } from "../utils/verifyToken.js";


//  create Hotel

router.post("/",verifyAdmin , createHotel);

// update hotel

router.put("/:id",verifyAdmin ,updateHotel);

// delete

router.delete("/:id",verifyAdmin ,deleteHotel);

// get specefic hotels

router.get("/:id",getHotel);

// get all hotels 

router.get("/",getHotels);





export default router;