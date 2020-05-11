import spotify from '../api/spotify';
import { put, takeEvery, select } from 'redux-saga/effects';
import { loadSearchTracks, SUBMIT_SEARCH_FORM } from '../actions';

const getTerm = state => state.term;

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
  yield put(loadSearchTracks(tracks));
}

export default function* submitSearchForm() {
  yield takeEvery(SUBMIT_SEARCH_FORM, fetchTracks);
}

