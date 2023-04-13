import axios from 'axios';

export const API = axios.create({
  baseURL: 'http://192.168.8.100:3000/',
});

export const APP_ID = 'ok';
