import Result from "../models/result.js";

// POST /api/results  (teacher) - Add result for a student
export const addResult = async (req, res) => {
  try {
    const { studentId, subject, marks } = req.body;

    if (!studentId || !subject || marks === undefined) {
      return res.status(400).json({ message: "studentId, subject, marks are required" });
    }

    const result = await Result.create({
      student: studentId,
      subject,
      marks,
    });

    res.status(201).json({ message: "Result added successfully", result });
  } catch (error) {
    console.error("Error adding result:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/results/:id  (teacher) - Update result
export const updateResult = async (req, res) => {
  try {
    const { id } = req.params;
    const { subject, marks } = req.body;

    const updated = await Result.findByIdAndUpdate(
      id,
      { subject, marks },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Result not found" });
    }

    res.json({ message: "Result updated successfully", result: updated });
  } catch (error) {
    console.error("Error updating result:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/results  (teacher) - Get all results
export const getAllResults = async (req, res) => {
  try {
    const results = await Result.find().populate("student", "name email");
    res.json(results);
  } catch (error) {
    console.error("Error getting results:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/results/my  (student)
export const getMyResults = async (req, res) => {
  try {
    const userId = req.user.id;

    const results = await Result.find({ student: userId });

    res.json(results);
  } catch (error) {
    console.error("Error getting student results:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
