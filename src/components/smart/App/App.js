import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Filter from '../Filter';
import CardList from '../CardList';
import Tabs from '../../stupid/Tabs';
import * as actions from '../../../redux/actions';
//import Api from '../../api';

import './App.scss';

//const api = new Api();

const App = ({ fetchTickets }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(fetchTickets()), []);

  return (
    <div className="app">
      <header className="app__header">
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

const mapStateToProps = (state) => ({
  tickets: state.tickets,
});
const mapDispatchToProps = (dispatch) => {
  const { ticketsFetchData } = bindActionCreators(actions, dispatch);

  return {
    fetchTickets: () => dispatch(ticketsFetchData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
