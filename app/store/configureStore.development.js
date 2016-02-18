import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const reduxRouterMiddleware = syncHistory(browserHistory);

const enhancer = compose(
  applyMiddleware(thunk, reduxRouterMiddleware),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
