import { PLAY_NEXT_TRACK, playTrack, selectTrack } from '../actions';

const loadNextTrackMiddleware = store => next => action => {
  if(action.type  === PLAY_NEXT_TRACK) {
    const { tracks, trackSelected } = store.getState();

    const currentIndexTrack = tracks.findIndex((track) => (track === trackSelected));

    if (currentIndexTrack < tracks.length - 1) {
      const track = tracks.find((track, index) => index > currentIndexTrack && track.preview_url);
      store.dispatch(selectTrack(track));
    } else {
      const track = tracks.find(track => track.preview_url);
      store.dispatch(selectTrack(track));
    }
    store.dispatch(playTrack());
  }

  next(action);
};

export default loadNextTrackMiddleware;
