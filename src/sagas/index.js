import { all } from 'redux-saga/effects';
import submitForm from './submitForm';
import googleAuth from './googleAuth';

export default function *rootSaga() {
  yield all([submitForm(), googleAuth()])
}
