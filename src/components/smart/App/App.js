import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Filter from '../Filter';
import CardList from '../CardList';
import Tabs from '../../stupid/Tabs';
import * as actions from '../../../redux/actions';
import Api from '../../api';

import './App.scss';

const api = new Api();

const App = ({ count, inc, getTickets }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(getTickets()), []);

  return (
    <div className="app">
      <header className="app__header">
        {count}
        <button type="submit" onClick={inc}>
          o
        </button>
        <button type="submit" onClick={getTickets}>
          x
        </button>

        <div className="app__logo-bckg">
          <img className="app__logo-pic" alt="logo" src="Group.svg" />
        </div>
      </header>
      <div className="app__container">
        <Filter />
        <section className="app__content">
          <Tabs />
          <CardList />
        </section>
      </div>
    </div>
  );
};

const mapStateToprops = (state) => ({
  count: state.count,
  getTickets: state.tickets,
});
const mapDispatchToProps = (dispatch) => {
  const { inc, getTickets } = bindActionCreators(actions, dispatch);

  return {
    inc,
    getTickets: () => {
      const tickets = api.getTickets();
      return getTickets(tickets);
    },
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(App);
