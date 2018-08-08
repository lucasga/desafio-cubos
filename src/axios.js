import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 8000,
});

export default api;
