import {
  CHANGE_TERM,
  LOAD_SEARCH_TRACKS,
  PAUSE_TRACK,
  PLAY_TRACK,
  SELECT_TRACK,
  UPDATE_DURATION,
  CHANGE_AUTH,
  CHANGE_SEARCH_TRACK_STATE,
  UPDATE_SEARCH_TRACK,
} from '../actions';
import { combineReducers } from 'redux';

const changeTermReducer = (state = '', action) => {
  if(action.type === CHANGE_TERM) {
    return action.term;
  }

  return state;
};

const searchTracksReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_SEARCH_TRACKS:
      return action.searchTracks;
    case CHANGE_SEARCH_TRACK_STATE:
      return state.map(track => {
        if(track.id === action.payload.id) {
          return { ...track, isSaved: !track.isSaved };
        } else {
          return track;
        }
      });
    case UPDATE_SEARCH_TRACK:
      return state.map(track => {
        if(track.id === action.payload.id) {
          return { ...track, savedTrackId: track.isSaved ? action.payload.savedTrackId : null };
        } else {
          return track;
        }
      });
    default:
      return state;
  }
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

const INITIAL_AUTH_STATE = {
  isSignedIn: false,
  userId: null
};

const authReducer = (state = INITIAL_AUTH_STATE, action) => {
  if (action.type === CHANGE_AUTH) {
    return { ...state,
      isSignedIn: action.payload.isSignedIn,
      userId: action.payload.userId
    };
  }

  return state;
};

export default combineReducers({
  term: changeTermReducer,
  searchTracks: searchTracksReducer,
  trackSelected: selectTrackReducer,
  isPlaying: togglePlayReducer,
  duration: updateDurationReducer,
  auth: authReducer
})



