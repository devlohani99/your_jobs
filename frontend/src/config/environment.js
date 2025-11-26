// Environment configuration for different deployments
const config = {
  development: {
    API_BASE_URL: 'http://localhost:4000',
  },
  production: {
    API_BASE_URL: 'https://your-jobs-backend.vercel.app',
  }
};

const environment = import.meta.env.MODE || 'development';
export const API_BASE_URL = config[environment].API_BASE_URL;