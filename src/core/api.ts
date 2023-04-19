import axios from 'axios';

import Config from 'src/config';

export const api = axios.create({
  baseURL: Config.apiUrl,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${Config.apiToken}`,
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': Config.githubApiVersion,
  },
});

api.interceptors.response.use(
  config => {
    return config.data;
  },
  async error => {
    if (!error.response) {
      throw new Error('No internet connection');
    }

    throw new Error(error.message);
  },
);
