import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducer from './core/reducers';

let middleware = [];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, applyMiddleware(logger)];
}

const store = createStore(reducer, composeWithDevTools(...middleware));

export default store;
