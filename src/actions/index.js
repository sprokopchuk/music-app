// action types
export const CHANGE_TERM = 'CHANGE_TERM';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const LOAD_TRACKS = 'LOAD_TRACKS';
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
  return {
    type: SUBMIT_FORM,
    payload: term
  }
};

export const loadTracks = (tracks) => {
  return {
    type: LOAD_TRACKS,
    payload: tracks
  }
};

export const selectTrack = (track) => {
  return {
    type: SELECT_TRACK,
    payload: track
  }
};

export const trackList = (tracks) => {
  return {
    type: TRACK_LIST,
    payload: tracks
  }
};

export const togglePlay = (play) => {
  return {
    type: TOGGLE_PLAY,
    payload: play
  }
};

