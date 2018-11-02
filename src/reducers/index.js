import { combineReducers } from 'redux';
import questionsReceivedReducer from './questionsReceivedReducer';
import scoresReducer from './scoresReducer';

export default combineReducers({
  questionsReceivedReducer,
  scoresReducer
});
