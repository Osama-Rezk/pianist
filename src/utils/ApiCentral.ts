import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../constants/config";

export async function request(options: AxiosRequestConfig) {
  const client = axios.create({
    baseURL,
  });

  const onSuccess = function (response: any) {
    return response.data;
  };

  const onError = function (error: any) {
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
}
