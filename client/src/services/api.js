import axios from "axios";

const API = axios.create({
    baseURL: "https://hirehunter-ai.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const pingServer = async () => {
    const res = await API.get("/ping");
    return res.data;
};

export const analyzeJD = async (jobDescription) => {
    const res = await API.post("/analyze", { jd: jobDescription });
    return res.data;
};

export const analyzeMultipleJD = async (jobDescriptions) => {
    const res = await API.post("/analyze-multiple", { jds: jobDescriptions });
    return res.data;
};

export default API;