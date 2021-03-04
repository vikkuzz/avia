/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../Filter';
import CardList from '../CardList';
import Tabs from '../Tabs';
import { getId, ticketsFetchData } from '../../redux/actions';

import './App.scss';

const App = () => {
  const stop = useSelector((state) => state.tickets.stop);
  const searchId = useSelector((state) => state.tickets.searchId);
  const dispatch = useDispatch();

  const getData = (id) => {
    let search = id;
    if (id === null) {
      search = dispatch(getId());
    }
    return search;
  };

  useEffect(() => {
    const token = getData(searchId);
    if (token !== undefined) {
      for (let i = 0; i < 25; i++) {
        if (!stop) {
          dispatch(ticketsFetchData(token));
        }
      }
    }
  });

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__logo-bckg">
          <img className="app__logo-pic" alt="logo" src="Avia.svg" />
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

export default App;
