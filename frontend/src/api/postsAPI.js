import axios from "axios";
let token = JSON.parse(localStorage.getItem("Batman"))?.token;
const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json", Authorization: `Bearer ${token}`
    },
});

// export const getUsersAPI = () => API.get("/");
// export const registerNewUserAPI = (formData) => API.post("/api/user/register", formData);
export const createNewPostAPI = (formData) => API.post("/api/post/create", formData);