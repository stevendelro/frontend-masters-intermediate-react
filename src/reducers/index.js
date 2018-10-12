import { combineReducers } from 'redux';
import location from './location';
import breeds from './breeds';
import breed from './breed';
import animal from './animal';

export default combineReducers({
  location,
  breeds,
  breed,
  animal
});
