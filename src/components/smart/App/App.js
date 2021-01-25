import React from 'react';

import Filter from '../Filter';
import CardList from '../CardList';

import './App.scss';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img alt="logo" className="logo" src="./Logo.svg" />
        </header>
        <div className="app__container">
          <Filter className="filter app__container-left" />
          <section className="section app__container-right">
            {/* <Tabs className="section__tabs" /> */}
            <CardList className="section__content" />
          </section>
        </div>
      </div>
    );
  }
}
