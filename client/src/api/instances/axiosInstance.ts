import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  timeout: 4000,
});

export default axiosInstance;
