import {
  CHANGE_TERM,
  LOAD_TRACKS,
  PAUSE_TRACK,
  PLAY_TRACK,
  SELECT_TRACK,
  UPDATE_DURATION,
  SIGN_IN,
  SIGN_OUT
} from '../actions';
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

const updateDurationReducer = (state = 0, action) => {
  if(action.type === UPDATE_DURATION) {
    return action.duration;
  }

  return state;
};

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};

export default combineReducers({
  term: changeTermReducer,
  tracks: trackListReducer,
  trackSelected: selectTrackReducer,
  isPlaying: togglePlayReducer,
  duration: updateDurationReducer,
  auth: authReducer
})



