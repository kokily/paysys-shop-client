import axios from 'axios';

const devServer = 'http://localhost:4000/api';
const prodServer = 'https://paysys.kr/api';

const client = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? prodServer : devServer,
  withCredentials: true,
});

export default client;
