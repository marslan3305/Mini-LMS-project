import axios from "axios";

export const getProfile = (token) =>
  axios.get("http://localhost:5000/api/profile", {
    headers: { Authorization: `Bearer ${token}` },
});
