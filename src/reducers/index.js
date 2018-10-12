import { combineReducers } from 'redux';
import location from './location';
import animal from './animal';

export default combineReducers({
  location,
  animal
});
