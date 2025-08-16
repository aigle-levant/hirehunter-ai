import axios from "axios";

const API = axios.create({
    baseURL: "https://hirehunter-ai.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default API;