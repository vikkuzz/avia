import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkM from 'redux-thunk';

import reducer from './redux/reducer';

import './index.css';
import './variables.scss';

import App from './components/smart/App';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middleware', store.getState());
  return result;
};

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunkM)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
