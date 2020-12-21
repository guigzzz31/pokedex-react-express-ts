import express from "express";
import WilderController from "../controllers/pokemon";
import catchErrorHandler from "../utils/errorHandler";
const router = express.Router();

router.post("/api/pokemon", catchErrorHandler(WilderController.create));
router.get("/api/pokemon", catchErrorHandler(WilderController.get));
router.put("/api/pokemon/:_id", catchErrorHandler(WilderController.like));

export default router;
