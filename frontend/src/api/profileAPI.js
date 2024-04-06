import axios from "axios";
let token = JSON.parse(localStorage.getItem("Batman"))?.token;
const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json", Authorization: `Bearer ${token}`
    },
});

export const getUserDetailsAPI = () => API.get("/api/profile/userdetails");
export const updateUserDetailsAPI = (formData) => API.post("/api/profile/updateuserdetails", formData);