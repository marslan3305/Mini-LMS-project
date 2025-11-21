import express from "express";
import { getAllStudents } from "../controllers/studentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/students  (Teacher only)
router.get("/", authMiddleware(["teacher"]), getAllStudents);

export default router;
