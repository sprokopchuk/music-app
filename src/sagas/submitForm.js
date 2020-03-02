import spotify from '../api/spotify';
import { put, call } from 'redux-saga/effects';
import { TRACK_LIST } from '../actions';

function* fetchTracks(term) {
  yield spotify.get('/search', {
    params: {
      q: term,
      type: 'track'
    }
  }).then((response) => {
    if (response.status === 200) {
      return response.data.tracks.items
    }
  });
}

export function* submitForm(term) {
  const tracks = yield call(fetchTracks, term);
  yield put({ type: TRACK_LIST, payload: tracks });
}

