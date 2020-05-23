import { all } from 'redux-saga/effects';
import submitSearchForm from './submitSearchForm';
import googleAuth from './googleAuth';
import loadNextTrack from './loadNextTrack';
import watchSaveUnsaveSearchTrack from './watchSaveUnsaveSearchTrack';

export default function *rootSaga() {
  yield all([submitSearchForm(), googleAuth(), loadNextTrack(), watchSaveUnsaveSearchTrack()])
}
