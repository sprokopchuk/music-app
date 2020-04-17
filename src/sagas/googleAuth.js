import googleAuthSettings from '../api/googleAuth';
import { takeEvery, all } from "redux-saga/effects";
import { SIGN_IN, SIGN_OUT } from '../actions';

function* trySignIn() {
  console.log('Trying sign in!');
}

function* trySignOut() {
  console.log('Trying sign out!');
}

export default function* googleAuth() {
  yield all([takeEvery(SIGN_IN, trySignIn), takeEvery(SIGN_OUT, trySignOut)]);
}

