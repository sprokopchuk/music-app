const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const GOOGLE_SCOPE = 'profile email';
const GOOGLE_SCRIPT = 'https://apis.google.com/js/api.js'

export default {
  scope: GOOGLE_SCOPE,
  scriptUrl: GOOGLE_SCRIPT,
  clientId: GOOGLE_CLIENT_ID
};
