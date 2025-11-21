import express from "express";
import {
  addResult,
  updateResult,
  getAllResults,
  getMyResults
} from "../controllers/resultController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/results        (Teacher only) - Add result
router.post("/", authMiddleware(["teacher"]), addResult);

// PUT /api/results/:id     (Teacher only) - Update result
router.put("/:id", authMiddleware(["teacher"]), updateResult);

// GET /api/results         (Teacher only) - Get all results
router.get("/", authMiddleware(["teacher"]), getAllResults);

// Student - get own results
router.get("/my", authMiddleware(["student"]), getMyResults);

export default router;
