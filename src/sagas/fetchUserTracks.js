import { takeEvery, select, put } from 'redux-saga/effects';
import { CHANGE_AUTH, loadUserTracks } from '../actions';
import server from '../api/server';
import spotify from '../api/spotify';

const getUserId = state => state.auth.userId;

function* fetchUserTracks() {
  const userId = yield select(getUserId);
  let userSavedTracks = [];
  if(userId !== null) {
    const resp = yield server.get('/tracks', { user_id: userId });
    if(resp.status === 200) {
      userSavedTracks = resp.data;
    } else {
      console.warn('Can not fetch user tracks from server!');
    }
  } else {
    // fetch from local storage
  }

  const response = yield spotify.get('/tracks', {
    params: {
      ids: userSavedTracks.map(item => item.track_id).join(',')
    }
  });
  let spotifyTracks = [];
  if(response.status === 200) {
    spotifyTracks = response.data.tracks;
  } else {
    console.warn('Can not fetch user tracks from spotify!');
  }

  const updatedTracks = spotifyTracks.map(track => {
    const savedTrack = userSavedTracks.find(item => item.track_id === track.id);
    return { ...track, isSaved: true, savedTrackId: savedTrack.id }
  });

  yield put(loadUserTracks(updatedTracks));
}

export default function* watchChangeAuthUserState() {
  yield takeEvery(CHANGE_AUTH, fetchUserTracks);
}
