import { ADD_PROJECT } from '../actions/projects';
import Immutable from 'immutable';

let initialState = Immutable.Map()
  .set('voog.com', Immutable.Map({host: 'voog.com', name: 'Voog', token: 'Jolo'}))
  .set('galojan.com', Immutable.Map({host: 'galojan.com', name: 'Galojan', token: 'Pohh'}));

export default function projects(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state.set(action.host, Immutable.Map({host: action.host, token: action.token, name: action.name}));
    default:
      return state;
  }
}
