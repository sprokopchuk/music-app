// action types
export const CHANGE_TERM = 'CHANGE_TERM';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const SELECT_TRACK = 'SELECT_TRACK';
export const LOAD_TRACKS = 'LOAD_TRACKS';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';

// action creators
export const changeTerm = (term) => {
  return {
    type: CHANGE_TERM,
    term
  }
};

export const submitForm = () => {
  return {
    type: SUBMIT_FORM
  }
};

export const loadTracks = (tracks) => {
  return {
    type: LOAD_TRACKS,
    tracks
  }
};

export const selectTrack = (track) => {
  return {
    type: SELECT_TRACK,
    track
  }
};

export const playTrack = () => {
  return {
    type: PLAY_TRACK,
    payload: true
  }
};

export const pauseTrack = () => {
  return {
    type: PAUSE_TRACK,
    payload: false
  }
};

