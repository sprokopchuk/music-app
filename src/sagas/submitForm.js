import spotify from '../api/spotify';
import { put, takeEvery, select } from 'redux-saga/effects';
import { LOAD_TRACKS, SUBMIT_FORM } from '../actions';

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
  yield put({ type: LOAD_TRACKS, tracks: tracks });
}

export function* submitForm() {
  yield takeEvery(SUBMIT_FORM, fetchTracks);
}

