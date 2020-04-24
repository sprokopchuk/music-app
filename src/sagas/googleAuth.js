import googleAuthSettings from '../api/googleAuth';
import { takeEvery, all, call } from 'redux-saga/effects';
import { SIGN_IN, SIGN_OUT } from '../actions';
import { loadScript } from '../utils/scripts';

function *loadGoogleAuth() {
  const initAuth2 = () => {
    global.gapi.load('auth2', () => {
      global.gapi.auth2.init({
        client_id: googleAuthSettings.clientId,
        scope: googleAuthSettings.scope
      });
    })
  };
  yield call(() => loadScript(googleAuthSettings.scriptUrl, initAuth2))
}

function* trySignIn() {
  console.log('Trying sign in!');
}

function* trySignOut() {
  console.log('Trying sign out!');
}

export default function* googleAuth() {
  yield all([takeEvery(SIGN_IN, trySignIn), takeEvery(SIGN_OUT, trySignOut), loadGoogleAuth()]);
}

