import { CHANGE_TERM, LOAD_TRACKS, PAUSE_TRACK, PLAY_TRACK, SELECT_TRACK, TOGGLE_PLAY } from '../actions';
import { combineReducers } from 'redux';

const changeTermReducer = (state = '', action) => {
  if(action.type === CHANGE_TERM) {
    return action.term;
  }

  return state;
};

const trackListReducer = (state = [], action) => {
  if(action.type === LOAD_TRACKS) {
    return action.tracks;
  }

  return state;
};

const selectTrackReducer = (state = null, action) => {
  if(action.type === SELECT_TRACK) {
    return action.track;
  }

  return state;
};

const togglePlayReducer = (state = false, action) => {
  switch (action.type) {
    case PLAY_TRACK:
      return action.payload;
    case PAUSE_TRACK:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  term: changeTermReducer,
  tracks: trackListReducer,
  trackSelected: selectTrackReducer,
  isPlaying: togglePlayReducer,
})



