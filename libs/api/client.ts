import axios from 'axios';

const client = axios.create({
  baseURL: 'https://paysys.kr/api',
  withCredentials: true,
});

export default client;
