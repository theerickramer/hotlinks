import { combineReducers } from 'redux';
import { REQUEST_HOTLINKS, RECEIVE_HOTLINKS, ADD_HOTLINK } from './actions';

function hotlinks(state = {}, action) {
  switch (action.type) {
    case REQUEST_HOTLINKS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_HOTLINKS:
      return Object.assign({}, state, {
        isFetching: false,
        hotlinks: action.hotlinks
      })
    default:
      return state
  }
}

export default hotlinks;