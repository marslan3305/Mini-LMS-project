import User from "../models/user.js";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id; // from token

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Profile Error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
