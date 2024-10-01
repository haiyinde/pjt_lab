import axios from "axios";
import { BASE_URL } from "@/config";

// axios 객체 생성
const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const fileApiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default apiInstance;
export { fileApiInstance };
