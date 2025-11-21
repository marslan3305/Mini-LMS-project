import User from "../models/user.js";

export const getAllStudents = async (req, res) => {
  try {
    const students = await User.find({ role: "student" }).select("-password");
    res.json(students);
  } catch (error) {
    console.error("Error getting students:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
