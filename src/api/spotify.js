import axios from 'axios';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/browserStorage';

const CLIENT_ID = 'dd8c0d9d0bc1413eb4294d6cd058b0d2';
const CLIENT_SECRET = '7442b20b2abd4a66967e61fce8ff0468';
const ACCESS_TOKEN = 'spotify_token';

const getAccessToken = () => {
  return axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + global.btoa(CLIENT_ID  + ':' + CLIENT_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'grant_type=client_credentials'
  })
};

const spotifyInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

spotifyInstance.interceptors.request.use(
  config => {
    const token = getFromLocalStorage(ACCESS_TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config;
  },
  error => Promise.reject(error)
);

spotifyInstance.interceptors.response.use(response => response, error => {
  const originalRequest = error.config;

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    return getAccessToken().then(response => {
      if (response.status === 200) {
        const token = response.data.access_token;
        saveToLocalStorage(ACCESS_TOKEN, token);

        return spotifyInstance(originalRequest);
      }
    });
  }

  return Promise.reject(error);
});

export default spotifyInstance;
