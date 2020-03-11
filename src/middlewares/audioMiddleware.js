import {
  PAUSE_TRACK,
  PLAY_NEXT_TRACK,
  PLAY_TRACK,
  playNextTrack,
  updateDuration,
  selectTrack,
  playTrack
} from '../actions';

const loadNextTrack = (store) => {
  const { tracks, trackSelected } = store.getState();

  const currentIndexTrack = tracks.findIndex((track) => (track === trackSelected));

  if(currentIndexTrack < tracks.length - 1) {
    const track = tracks.find((track, index) => index > currentIndexTrack && track.preview_url);
    store.dispatch(selectTrack(track));
  } else {
    const track = tracks.find(track => track.preview_url);
    store.dispatch(selectTrack(track));
  }
  store.dispatch(playTrack());
};

const audioMiddleware = store => next => {
  const audio = new Audio();
  audio.ontimeupdate = () => {
    const duration = audio.currentTime / audio.duration * 100;
    store.dispatch(updateDuration(duration));
  };

  audio.onended = () => {
    store.dispatch(playNextTrack());
  };

  return action => {
    switch (action.type) {
      case PLAY_TRACK:
        const { trackSelected } = store.getState();
        if(audio.src !== trackSelected.preview_url) {
          audio.src = trackSelected.preview_url
        }
        audio.play();
        break;
      case PAUSE_TRACK:
        audio.pause();
        break;
      case PLAY_NEXT_TRACK:
        loadNextTrack(store);
        break;
      default:
        break;
    }

    next(action);
  };
};

export default audioMiddleware;