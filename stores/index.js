import { compact } from 'lodash/fp';
import { createStore, compose, applyMiddleware } from 'redux';

import { isServer } from '../libs';
import rootReducer from './rootReducer';

const env = process.env.NODE_ENV || 'development';

const logger = () => next => action => {
  isServer && env === 'development' && console.log('REDUX: %s', action.type);
  return next(action);
};

const makeStore = initialState => {
  const enhancers = compact([
    applyMiddleware(logger),
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  ]);

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newReducer = require('./rootReducer').default;

      store.replaceReducer(newReducer);
    });
  }

  return store;
};

export default makeStore;
