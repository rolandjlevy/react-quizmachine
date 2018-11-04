import { combineReducers } from 'redux';
import question from './question';
import score from './score';
import next from './next';
import timer from './timer';

export default combineReducers({
  question,
  score,
  next,
  timer
});
