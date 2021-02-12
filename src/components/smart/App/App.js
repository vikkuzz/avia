import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Filter from '../Filter';
import CardList from '../CardList';
import Tabs from '../../stupid/Tabs';
import { ticketsFetchData } from '../../../redux/actions';

import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(ticketsFetchData()), []);

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

export default App;
