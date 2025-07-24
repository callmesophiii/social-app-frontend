import axios from 'axios';

export const backendClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`, // Use environment variable or default to localhost
}); // Adjust the base URL as needed

