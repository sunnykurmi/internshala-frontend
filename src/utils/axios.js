import axios from "axios";

const instance = axios.create({
    baseURL: "https://internshala-backend-twn2.onrender.com",
    withCredentials: true,
});
// baseURL: "http://localhost:8080/",

export default instance;
