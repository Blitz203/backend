import express from "express";
import getMenu from "../controllers/menuControllers/getMenu";

const router = express.Router();

router.get("/", getMenu); //get all

export default router;
