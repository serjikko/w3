import axios from 'axios';

const RSSApi = axios.create({
  baseURL: process.env.REACT_APP_RSS_API_URL,
});

RSSApi.interceptors.request.use(config => {
  return config;
});



export default RSSApi;
