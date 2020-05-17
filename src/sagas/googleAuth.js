import googleAuthSettings from '../api/googleAuth';
import { takeEvery, all, call, put } from 'redux-saga/effects';
import { TRY_SIGN_IN, TRY_SIGN_OUT, changeAuthState } from '../actions';
import { loadScript } from './utils/scripts';

const loadGoogleAuth2 = () => new Promise(resolve => {
  global.gapi.load('auth2', resolve)
});

const initAuth2 = () => global.gapi.auth2.init({
  client_id: googleAuthSettings.clientId,
  scope: googleAuthSettings.scope
});

function* updateAuthState() {
  const authInstance = global.gapi.auth2.getAuthInstance();
  const isSignedIn = authInstance.isSignedIn.get();
  const userId = authInstance.currentUser.get().getId();
  yield put(changeAuthState({ isSignedIn: isSignedIn, userId: userId }));
}

function *prepareGoogleAuth() {
  yield call(loadScript, googleAuthSettings.scriptUrl);
  yield call(loadGoogleAuth2);
  yield call(initAuth2);
  yield call(updateAuthState);
}

function* trySignIn() {
  yield call(global.gapi.auth2.getAuthInstance().signIn);
  yield call(updateAuthState);
}

function* trySignOut() {
  yield call(global.gapi.auth2.getAuthInstance().signOut);
  yield call(updateAuthState);
}

export default function* googleAuth() {
  yield all([takeEvery(TRY_SIGN_IN, trySignIn), takeEvery(TRY_SIGN_OUT, trySignOut), prepareGoogleAuth()]);
}

