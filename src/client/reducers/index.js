// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import env from './sampleReducer';

export default combineReducers({
  routing: routerReducer,
  env
});

