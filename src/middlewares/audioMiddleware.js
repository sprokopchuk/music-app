import { PAUSE_TRACK, PLAY_TRACK, playNextTrack, updateDuration } from '../actions';

const audioMiddleware = store => next => {
  const audio = new Audio();
  audio.ontimeupdate = () => {
    const duration = audio.currentTime / audio.duration * 100;
    console.log(duration);
    store.dispatch(updateDuration(duration));
  };

  audio.onended = () => {
    store.dispatch(playNextTrack());
  };


  // Ensure we reflect the store's initial state
  // const initialState = store.getState();
  // if (initialState.isPlaying) musicPlayer.play();
  // musicPlayer.seek(initialState.currentTime);

  return action => {
    switch (action.type) {
      case PLAY_TRACK:
        const { trackSelected } = store.getState();
        console.log(trackSelected);
        audio.src = trackSelected.preview_url;
        audio.play();
        break;
      case PAUSE_TRACK:
        audio.pause();
        break;
      default:
    }
    // if(trackSelected && trackSelected.preview_url) {
    //
    // }

    // const { isPlaying: wasPlaying, currentTime: previousTime } = store.getState();
    next(action);
    // const { isPlaying: isPlaying, currentTime: nextTime } = store.getState();

    // Don't dispatch any actions for actions that originated from the player
    // if (action.origin === audioOrigin) return;
    //
    // if (!wasPlaying && isPlaying) musicPlayer.play();
    // if (wasPlaying && !isPlaying) musicPlayer.pause();
    // if (previousTime !== nextTime) musicPlayer.seek(nextTime);
  };
};

export default audioMiddleware;