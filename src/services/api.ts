import axios from 'axios';

// Adresse de ton serveur NestJS
const API = axios.create({
  baseURL: 'http://localhost:3000',
});

// Intercepteur pour envoyer automatiquement le Token JWT s'il existe
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;