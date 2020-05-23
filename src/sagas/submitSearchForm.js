import spotify from '../api/spotify';
import { put, takeEvery, select } from 'redux-saga/effects';
import { loadSearchTracks, SUBMIT_SEARCH_FORM } from '../actions';
import fetchSavedUserTrackIds from './utils/fetchSavedUserTrackIds'

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
  const userTrackIds = yield fetchSavedUserTrackIds(userId, tracks.map(track => track.id));
  const updatedTracks = tracks.map(track => userTrackIds.includes(track.id) ? {...track, isSaved: true } : track);
  yield put(loadSearchTracks(updatedTracks));

}

export default function* submitSearchForm() {
  yield takeEvery(SUBMIT_SEARCH_FORM, fetchTracks);
}

