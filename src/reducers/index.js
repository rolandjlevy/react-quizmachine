import { combineReducers } from 'redux';
import questionsOutput from './questionsOutput';
import scoresReducer from './scoresReducer';

export default combineReducers({
  questionsOutput,
  scoresReducer
});
