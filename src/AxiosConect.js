import axios from "axios";

const BASE_URL = "http://127.0.0.1:4000/APIRESTCICLO4A";

const apiInstance = axios.create({ baseURL: BASE_URL });

export default apiInstance;
