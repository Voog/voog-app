import { ADD_PROJECT } from '../actions/projects';
import Immutable from 'immutable';

let items = Immutable.Map()
  .set(1, Immutable.Map({name: 'style.css'}))
  .set(2, Immutable.Map({name: 'Front_page.tpl'}));

let initialState = Immutable.Map()
  .set('voog.com', Immutable.Map({host: 'voog.com', name: 'Voog', token: 'Jolo', items: items}))
  .set('galojan.com', Immutable.Map({host: 'galojan.com', name: 'Galojan', token: 'Pohh', items: items}));

export default function projects(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state.set(action.host, Immutable.Map({
        host: action.host, token: action.token, name: action.name, items: items
      }));
    default:
      return state;
  }
}
