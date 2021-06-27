import axios, { AxiosRequestConfig } from "axios";
import { API_URL } from "../constants/constants";

export const apiHelper = () => {
  const get = (url: string, config?: AxiosRequestConfig) => axios.get(`${API_URL}${url}`, config);
  const patch = (url: string, config?: AxiosRequestConfig) => axios.patch(`${API_URL}${url}`, config);
  const post = (url: string, config?: AxiosRequestConfig) => axios.post(`${API_URL}${url}`, config);

  return {
    get,
    patch,
    post,
  }
};