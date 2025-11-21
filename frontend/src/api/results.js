import axios from "axios";

const API = "http://localhost:5000/api/results";

export const addResult = (data, token) =>
  axios.post(API, data, {
    headers: { Authorization: `Bearer ${token}` },
});

export const updateResult = (id, data, token) =>
  axios.put(`${API}/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
});

export const getAllResults = (token) =>
  axios.get(API, {
    headers: { Authorization: `Bearer ${token}` },
});

export const getMyResults = (token) =>
  axios.get(`${API}/my`, {
    headers: { Authorization: `Bearer ${token}` },
});
