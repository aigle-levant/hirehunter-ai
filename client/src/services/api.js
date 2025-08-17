import axios from "axios";

const API = axios.create({
    baseURL: "https://hirehunter-ai.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

// ping
export const pingServer = async () => {
    const res = await API.get("/ping");
    return res.data;
};

// single JD
export const analyzeJD = async (jobDescription) => {
    const res = await API.post("/jd/keywords-multi", { jds: [{ jd: jobDescription }] });
    return res.data;
};

// multiple JDs
export const analyzeMultipleJD = async (jobDescriptions) => {
    const res = await API.post("/jd/keywords-multi", {
        jds: jobDescriptions.map((jd) => ({ jd })),
    });
    return res.data;
};

export default API;