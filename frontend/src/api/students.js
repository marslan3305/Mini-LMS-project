import axios from "axios";

const API = "http://localhost:5000/api/students";

export const getStudents = (token) =>
  axios.get(API, {
    headers: { Authorization: `Bearer ${token}` },
});
