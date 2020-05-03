import {
  PAUSE_TRACK,
  PLAY_TRACK,
  playNextTrack,
  updateDuration,
} from '../actions';

const audioMiddleware = store => next => {
  const audio = new global.Audio();
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
      default:
        break;
    }

    next(action);
  };
};

export default audioMiddleware;
