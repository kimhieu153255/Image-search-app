import axios from "axios";
import KeyAPI from "../../KeyAPI";

const AxiosInstance = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?client_id=${KeyAPI.Access_Key}&per_page=20`,
});

export default AxiosInstance;
