import { all } from 'redux-saga/effects';
import submitForm from './submitForm';
import playNextTrack from './playNextTrack';

export default function *rootSaga() {
  yield all([submitForm(), playNextTrack()])
}