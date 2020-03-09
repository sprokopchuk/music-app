import { all } from 'redux-saga/effects';
import submitForm from './submitForm';

export default function *rootSaga() {
  yield all([submitForm()])
}