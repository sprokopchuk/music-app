import { all } from 'redux-saga/effects';
import submitSearchForm from './submitSearchForm';
import googleAuth from './googleAuth';

export default function *rootSaga() {
  yield all([submitSearchForm(), googleAuth()])
}
