import { CHANGE_TERM, LOAD_TRACKS } from '../actions';
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

export default combineReducers({
  term: changeTermReducer,
  tracks: trackListReducer
})



