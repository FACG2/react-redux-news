import { combineReducers } from 'redux';
import counter from './counter-reducer';
import posts from './posts-reducer';

export default combineReducers({
  counter,
  posts
});
