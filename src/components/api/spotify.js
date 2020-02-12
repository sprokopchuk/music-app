import axios from 'axios';
import { getFromLocalStorage } from '../utils'

const CLIENT_ID = 'dd8c0d9d0bc1413eb4294d6cd058b0d2';
const CLIENT_SECRET = '7442b20b2abd4a66967e61fce8ff0468';
const AUTHORIZATION_TOKEN = 'spotify_token';

const authorize = () => {
  return axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + global.btoa(CLIENT_ID  + ':' + CLIENT_SECRET),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      'grant_type': 'client_credentials'
    }
  })
};

const getToken = () => {
  return getFromLocalStorage(AUTHORIZATION_TOKEN);
};


export default axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + getToken()
  }
});

