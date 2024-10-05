import axios, {CancelTokenSource} from 'axios';
import {API_URL} from './apiConfig/apiConfig';

const apiRequest = (source: CancelTokenSource) => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,

    headers: {
      // 'Content-Type': 'application/json',
    },
    cancelToken: source?.token,
  });

  axiosInstance.interceptors.request.use(
    response => {
      return response;
    },
    error => {
      console.log(
        JSON.stringify(error, undefined, 4),
        'from catch of apiRequest',
      );
      return error;
    },
  );

  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      console.log(
        JSON.stringify(error, undefined, 4),
        'from catch of apiRequest',
      );

      return error;
    },
  );
  return axiosInstance;
};

export default apiRequest;
