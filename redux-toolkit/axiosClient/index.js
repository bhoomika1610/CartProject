import axios from 'axios';
import Constants from 'apiconstants';

const ApiClient = axios.create({
  baseURL: Constants.BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiClient;
