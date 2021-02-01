import React from 'react';

import Filter from '../Filter';
import CardList from '../CardList';
import Tabs from '../../stupid/Tabs';

import './App.scss';

const App = (searchId) => (
  <div className="app">
    <header className="app__header">
      <button type="submit" onClick={() => searchId}>
        o
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

export default App;
