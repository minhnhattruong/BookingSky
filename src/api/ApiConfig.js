import axios from 'axios';
import { store } from '../../App';
import Config from 'react-native-config';
let instance = axios.create({
  // baseURL: 'http://103.163.216.51:8000',
  baseURL: 'http://103.163.216.51:8000',
  // baseURL: Config.REACT_APP_API_KEY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  // validateStatus: () => true
});
instance.interceptors.request.use(function (config) {
  const state = store.getState();
  const token = state?.auth?.token

  return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
}, function (error) {
  return Promise.reject(error);
});
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error.response);
});

export default instance

