import axios from "axios";

export default function createAPIService(token?: string) {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  api.defaults.headers["Content-Type"] = "application/json";
  api.defaults.headers["accept"] = "application/json";
  if (token) {
    api.defaults.headers["authorization"] = `Bearer ${token}`;
  }
  return api;
}
