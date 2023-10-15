import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const fetchProduct = (url) =>
  axios.get(BASE_URL + url).then((result) => result.data);
