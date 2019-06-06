import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import home from './reducers/home';
import login from './reducers/login';

const config = {
  key: 'dashboard_0.0.1',
  storage: storage,
  whitelist: ['login'] //持久化白名单
};

const rootReducer = combineReducers({
  home,
  login
});

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

export default createStore(persistReducer(config, rootReducer), enhancer);
