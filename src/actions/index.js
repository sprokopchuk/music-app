// action types
export const CHANGE_TERM = 'CHANGE_TERM';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SELECT_TRACK = 'SELECT_TRACK';
export const TRACK_LIST = 'TRACK_LIST';
export const TOGGLE_PLAY = 'TOGGLE_PLAY';

// action creators
export const changeTerm = (term) => {
  return {
    type: CHANGE_TERM,
    payload: term
  }
};

export const submitForm = (term) => {
  // Call an API
  return {
    type: SUBMIT_FORM,
    payload: 'data'
  }
};

export const selectTrack = (track) => {
  return {
    type: SELECT_TRACK,
    payload: track
  }
};

export const trackList = (list) => {
  return {
    type: TRACK_LIST,
    payload: list
  }
};

export const togglePlay = (play) => {
  return {
    type: TOGGLE_PLAY,
    payload: play
  }
};

