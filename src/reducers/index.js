import { CHANGE_TERM, SUBMIT_FORM } from '../actions';
import { combineReducers } from 'redux';

const changeTermReducer = (state = '', action) => {
  if(action.type === CHANGE_TERM) {
    return action.payload;
  }

  return state;
};

const formSubmitReducer = (state = '', action) => {
  if(action.type === SUBMIT_FORM) {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  term: changeTermReducer,
  tracks: formSubmitReducer
})



