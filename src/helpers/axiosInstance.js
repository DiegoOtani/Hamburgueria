import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://apihamburgueria.onrender.com',
});

export default axiosInstance;
