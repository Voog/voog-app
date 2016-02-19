import { LOAD_PROJECTS, ADD_PROJECT } from '../actions/projects';
import Immutable from 'immutable';

let initialState = Immutable.Map();

export default function projects(state = initialState, action) {
  switch (action.type) {
    case LOAD_PROJECTS:
      action.projects.forEach(project => {
        state = state.set(project.host, Immutable.Map({
          host: project.host, token: project.token, name: project.name, files: Immutable.fromJS(project.files)
        }));
      });
      return state;
    case ADD_PROJECT:
      return state.set(action.host, Immutable.Map({
        host: action.host, token: action.token, name: action.name, items: items
      }));
    default:
      return state;
  }
}
