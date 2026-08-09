import axios from 'axios';

// Define the base URL for your API
// This can be replaced with an environment variable in production
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Optional: Add an interceptor for requests (e.g., attaching an auth token)
api.interceptors.request.use(
  (config) => {
    // Example: const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Add an interceptor for responses (e.g., handling global errors)
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Example: Handle 401 Unauthorized globally here
    console.error('API Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default api;
