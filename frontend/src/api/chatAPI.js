import axios from "axios";
let token = JSON.parse(localStorage.getItem("Batman"))?.token;
const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json", Authorization: `Bearer ${token}`
    },
});


export const getUsersAllChatsAPI = (otherUserId) => API.get(`/api/chat/message/${otherUserId}`);