import { takeEvery, select, put } from 'redux-saga/effects';
import { LOAD_NEXT_TRACK, playTrack, selectTrack } from '../actions';

const getTrackSelected = state => state.trackSelected;
const getTracks = (state, key) => state[key];

function* findAvailableTrack(action) {
  const tracks = yield select(getTracks, action.key);
  const trackSelected = yield select(getTrackSelected);
  const currentIndexTrack = tracks.findIndex((track) => (track === trackSelected));

  if (currentIndexTrack < tracks.length - 1) {
    const track = tracks.find((track, index) => index > currentIndexTrack && track.preview_url);
    yield put(selectTrack(track));
  } else {
    const track = tracks.find(track => track.preview_url);
    yield put(selectTrack(track));
  }
  yield put (playTrack());
}

export default function* loadNextTrack() {
  yield takeEvery(LOAD_NEXT_TRACK, findAvailableTrack);
}
