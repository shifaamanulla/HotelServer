import express from "express"
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";

const router =express.Router()
//create
router.post("/",createHotel)

    //update
router.put("/:id",updateHotel)

   //delete
router.delete("/:id",deleteHotel)
//get
router.get("/:id",getHotel)

//get All
router.get("/",getAllHotel)

export default router