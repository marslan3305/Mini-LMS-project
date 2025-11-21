import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  role: { type: String, enum: ["teacher", "student"], default: "student" }
});

const User = mongoose.model("User", userSchema);
export default User;
