import { CHANGE_TERM, TRACK_LIST } from '../actions';
import { combineReducers } from 'redux';

const changeTermReducer = (state = '', action) => {
  if(action.type === CHANGE_TERM) {
    return action.term;
  }

  return state;
};

const trackListReducer = (state = [], action) => {
  if(action.type === TRACK_LIST) {
    return action.tracks;
  }

  return state;
};

export default combineReducers({
  term: changeTermReducer,
  tracks: trackListReducer
})



