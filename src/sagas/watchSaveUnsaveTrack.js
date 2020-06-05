import { takeEvery, select, call, put } from 'redux-saga/effects'
import server from '../api/server'
import {
  CHANGE_TRACK_STATE,
  updateSearchTrack,
  addTrackToUserPlaylist,
  deleteTrackFromUserPlaylist
} from '../actions';

const getUserId = state => state.auth.userId;

function* deleteSavedTrack(track) {
  const response = yield server.delete(`/tracks/${track.savedTrackId}`);
  if(response.status === 200) {
    yield put(updateSearchTrack({ ...track, savedTrackId: null, isSaved: false }));
    yield put(deleteTrackFromUserPlaylist(track));
  }
}

function* saveTrackToUserPlaylist(track, userId) {
  const response = yield server.post('/tracks', { track_id: track.id, user_id: userId });
  if(response.status === 201) {
    const savedTrack = { ...track, savedTrackId: response.data.id, isSaved: true };
    yield put(updateSearchTrack(savedTrack));
    yield put(addTrackToUserPlaylist(savedTrack))
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
  yield takeEvery(CHANGE_TRACK_STATE, updateTrackState);
}
