import axios from 'axios';
import { API_KEY } from './api_key';

export const fetchMoveis = async (url, query = '', page = 1) => {
  try {
    return await axios.get(url, {
      params: { api_key: API_KEY, query, page },
    });
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
};
