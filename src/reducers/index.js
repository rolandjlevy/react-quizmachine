import { combineReducers } from 'redux';
import question from './question';
import score from './score';
import next from './next';

export default combineReducers({
  question,
  score,
  next
});
