import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const getProduct = (url) =>
  axios.get(BASE_URL + url).then((result) => result.data);
