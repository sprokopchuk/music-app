import { takeEvery, select, put } from "redux-saga/effects";
import { PLAY_NEXT_TRACK, selectTrack } from '../actions';

const getState = state => ({ trackSelected: state.trackSelected, tracks: state.tracks });

function* findNextTrack() {
  const { trackSelected, tracks } = yield select(getState);

  const currentIndexTrack = tracks.findIndex((track) => (track === trackSelected));
  if(currentIndexTrack >= 0) {
    const track = tracks.find((track, index) => index > currentIndexTrack && track.preview_url);
    yield put(selectTrack(track));
  } else {
    const track = tracks.find(track => track.preview_url);
    yield put(selectTrack(track));
  }
}


export default function* playNextTrack() {
  yield takeEvery(PLAY_NEXT_TRACK, findNextTrack);
}