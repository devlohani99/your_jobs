// Environment configuration for different deployments
const config = {
  development: {
    API_BASE_URL: 'http://localhost:4000',
  },
  production: {
    API_BASE_URL: 'https://yourjobs-your-jobsbackend-9s7vcp51u-devlohani99s-projects.vercel.app',
  }
};

const environment = import.meta.env.MODE || 'development';
export const API_BASE_URL = config[environment].API_BASE_URL;