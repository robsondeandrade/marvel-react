import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_RESULT_BASE_URL,
  params: {
    ts: "1556322834",
    apikey: "d11c4835d96c0a8a8360368fff71ffeb",
    hash: "f55017af5db4adaf5877bb0671b8f783",
  },
});

export default API;
