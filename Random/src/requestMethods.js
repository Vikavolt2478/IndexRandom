import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjM5ZmIxZDhkOTk1ZDM1NjZmODZhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMTA3MTU4OCwiZXhwIjoxNzAxMzMwNzg4fQ.JzojkyGku6zio0zUnv989_U0J0Q8eEZS14fKB_QFGI4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});