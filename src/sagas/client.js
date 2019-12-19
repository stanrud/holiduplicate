import axios from 'axios';
import { apiEndpoint } from '../constants/config';

const client = axios.create({
  baseURL: apiEndpoint,
  headers: { 'Content-Type': 'application/json' }
});

export default client;
