import axios from "axios";
// http://localhost:3000/api/user/register

const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
    },
});

export const getUsersAPI = () => API.get("/");
export const getAllUsersAPI = () => API.get("/api/user/getallusers");
export const registerNewUserAPI = (formData) => API.post("/api/user/register", formData);
export const loginUserAPI = (formData) => API.post("/api/user/login", formData);