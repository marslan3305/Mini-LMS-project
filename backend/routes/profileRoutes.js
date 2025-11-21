import express from "express";
import { getProfile } from "../controllers/profileController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/profile (Student )
// router.get("/", authMiddleware(["student"]), getProfile);
router.get("/", authMiddleware(["student", "teacher"]), getProfile);
export default router;
