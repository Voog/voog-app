import { combineReducers } from 'redux';
import projects from './projects';
import routing from './routing';

const rootReducer = combineReducers({
  projects, routing
});

export default rootReducer;
