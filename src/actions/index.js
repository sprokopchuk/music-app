// action types
export const CHANGE_TERM = 'CHANGE_TERM';
export const SUBMIT_SEARCH_FORM = 'SUBMIT_SEARCH_FORM';
export const SELECT_TRACK = 'SELECT_TRACK';
export const LOAD_SEARCH_TRACKS = 'LOAD_SEARCH_TRACKS';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const UPDATE_DURATION = 'UPDATE_DURATION';
export const LOAD_NEXT_TRACK = 'LOAD_NEXT_TRACK';
export const TRY_SIGN_IN = 'TRY_SIGN_IN';
export const TRY_SIGN_OUT = 'TRY_SIGN_OUT';
export const CHANGE_AUTH = 'CHANGE_AUTH';
export const CHANGE_SEARCH_TRACK_STATE = 'CHANGE_SEARCH_TRACK_STATE';
export const UPDATE_SEARCH_TRACK = 'UPDATE_SEARCH_TRACK';

// action creators
export const changeTerm = (term) => {
  return {
    type: CHANGE_TERM,
    term
  }
};

export const submitSearchForm = () => {
  return {
    type: SUBMIT_SEARCH_FORM
  }
};

export const loadSearchTracks = (tracks) => {
  return {
    type: LOAD_SEARCH_TRACKS,
    searchTracks: tracks
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

export const updateDuration = (duration) => {
  return {
    type: UPDATE_DURATION,
    duration
  }
};

export const loadNextTrack = (key) => {
  return {
    type: LOAD_NEXT_TRACK,
    key
  }
};

export const trySignIn = () => {
  return {
    type: TRY_SIGN_IN
  }
};

export const trySignOut = () => {
  return {
    type: TRY_SIGN_OUT
  }
};

export const changeAuthState = auth => {
  return {
    type: CHANGE_AUTH,
    payload: auth
  }
};

export const changeSearchTrackState = track => {
  return {
    type: CHANGE_SEARCH_TRACK_STATE,
    payload: track
  }
};

export const updateSearchTrack = track => {
  return {
    type: UPDATE_SEARCH_TRACK,
    payload: track
  }
};

