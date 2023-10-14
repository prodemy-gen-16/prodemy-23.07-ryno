import useSWR from "swr";
import axios from "axios";

import { BASE_URL } from "../services/api.js";

export function useProduct(id) {
  const key = id ? `${BASE_URL}/products/${id}` : `${BASE_URL}/products`;
  const getProduct = (url) => axios.get(url).then((result) => result.data);

  const { data, error, isLoading } = useSWR(key, getProduct);

  return {
    data,
    error,
    isLoading,
  };
}
