import { combineReducers } from 'redux';
import questionsReceivedReducer from './questionsReceivedReducer';
import scoresReducer from './scoresReducer';
import nextQuestionReducer from './nextQuestionReducer';

export default combineReducers({
  questionsReceivedReducer,
  scoresReducer,
  nextQuestionReducer
});
