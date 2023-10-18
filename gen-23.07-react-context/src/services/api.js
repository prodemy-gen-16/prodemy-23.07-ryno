import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const getProduct = (url) =>
  axios.get(BASE_URL + url).then((response) => response.data);

export const postOrder = (payload) => axios.post(BASE_URL + "/orders", payload);
