import axios from "axios";

const instance = axios.create({
    baseURL: "https://internshala-backend-twn2.onrender.com" || "http://localhost:8080/",
    withCredentials: true,
});

export default instance;