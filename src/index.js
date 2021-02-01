import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';

import reducer from './redux/reducer';
import * as actions from './redux/actions';
import Api from './components/api';

import './index.css';
import './variables.scss';

import App from './components/smart/App';

const api = new Api();

const getSearchId = api.getSearchId();

const store = createStore(reducer);
const { dispatch } = store;
const { searchId } = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App searchId={() => console.log(searchId(getSearchId))} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

update();
store.subscribe(update);
