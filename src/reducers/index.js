import { CHANGE_TERM } from '../actions';
import { combineReducers } from 'redux';

const changeTermReducer = (state = '', action) => {
  if(action.type === CHANGE_TERM) {
    return action.payload
  }

  return state;
};

export default combineReducers({
  term: changeTermReducer
})



