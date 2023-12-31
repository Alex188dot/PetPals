import axios from "axios";

// This will ensure that every time there is a request it will be sent to the server
const API = axios.create({
  baseURL: "https://petpals-server.onrender.com",
});

export const login = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
