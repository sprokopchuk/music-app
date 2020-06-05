import spotify from '../api/spotify';
import { put, takeEvery, select } from 'redux-saga/effects';
import { loadSearchTracks, SUBMIT_SEARCH_FORM } from '../actions';
import fetchSavedUserTracks from './utils/fetchSavedUserTracks'

const getTerm = state => state.term;
const getUserId = state => state.auth.userId;

function* fetchTracks() {
  const term = yield select(getTerm);
  const tracks = yield spotify.get('/search', {
    params: {
      q: term,
      type: 'track'
    }
  }).then((response) => {
    if (response.status === 200) {
      return response.data.tracks.items
    } else {
      console.warning('Can not fetch tracks from spotify API');
      return [];
    }
  });
  const userId = yield select(getUserId);
  const userSavedTracks = yield fetchSavedUserTracks(userId, tracks.map(track => track.id));

  const updatedTracks = tracks.map(track => {
    const savedTrack = userSavedTracks.find(item => item.track_id === track.id);
    if(!!savedTrack) {
      return {...track, isSaved: true, savedTrackId: savedTrack.id }
    } else {
      return {...track, isSaved: false, savedTrackId: null }
    }
  });
  yield put(loadSearchTracks(updatedTracks));

}

export default function* submitSearchForm() {
  yield takeEvery(SUBMIT_SEARCH_FORM, fetchTracks);
}

