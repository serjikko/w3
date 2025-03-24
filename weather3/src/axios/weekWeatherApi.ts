import axios from 'axios';

const weekWeatherApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

weekWeatherApi.interceptors.request.use(config => {
  config.url =
    config.url + '&appid=' + process.env.REACT_APP_API_KEY;
  return config;
});

export default weekWeatherApi;
