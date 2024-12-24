import axios from "axios";

const locale =
  typeof window !== "undefined" ? localStorage.getItem("language") : null;
export const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: process.env.API_KEY,

    language: locale || "en",
  },
});
