import { PAUSE_TRACK, PLAY_TRACK } from '../actions';
import audioInstance from '../audioInstance'

export default store => next => {
  return action => {
    switch (action.type) {
      case PLAY_TRACK:
        const { trackSelected } = store.getState();
        if(audioInstance.src !== trackSelected.preview_url) {
          audioInstance.src = trackSelected.preview_url
        }
        audioInstance.play();
        break;
      case PAUSE_TRACK:
        audioInstance.pause();
        break;
      default:
        break;
    }

    next(action);
  };
};
