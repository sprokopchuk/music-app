import { takeEvery, select, call, put } from 'redux-saga/effects'
import server from '../api/server'
import { CHANGE_SEARCH_TRACK_STATE, updateSearchTrack } from '../actions';

const getUserId = state => state.auth.userId;

function* deleteSavedTrack(track) {
  const response = yield server.delete(`/tracks/${track.savedTrackId}`);
  if(response.status === 200) {
    yield put(updateSearchTrack({ ...track, savedTrackId: null, isSaved: false }));
  }
}

function* saveTrackToUserPlaylist(track, userId) {
  const response = yield server.post('/tracks', { track_id: track.id, user_id: userId });
  if(response.status === 201) {
    yield put(updateSearchTrack({ ...track, savedTrackId: response.data.id, isSaved: true }));
  }
}

function* updateTrackState(action) {
  const userId = yield select(getUserId);
  if(userId !== null) {
    const track = action.payload;
    if (track.isSaved) {
      yield call(deleteSavedTrack, track);
    } else {
      yield call(saveTrackToUserPlaylist, track, userId);
    }
  } else {
    // Save tracks to local storage
  }
}

export default function* watchSaveUnsaveTrack() {
  yield takeEvery(CHANGE_SEARCH_TRACK_STATE, updateTrackState);
}
