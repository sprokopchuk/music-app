import spotify from '../api/spotify';
import { put, takeEvery, select } from 'redux-saga/effects';
import { loadTracks, SUBMIT_FORM } from '../actions';

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
      return [];
    }
  });
  yield put(loadTracks(tracks));
}

export default function* submitForm() {
  yield takeEvery(SUBMIT_FORM, fetchTracks);
}

