import { all } from 'redux-saga/effects';
import submitSearchForm from './submitSearchForm';
import googleAuth from './googleAuth';
import loadNextTrack from './loadNextTrack';

export default function *rootSaga() {
  yield all([submitSearchForm(), googleAuth(), loadNextTrack()])
}
