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
          <div className="app__logo-bckg">
            <img className="app__logo-pic" alt="logo" src="Group.svg" />
          </div>
        </header>
        <div className="app__container">
          <Filter />
          <section>
            {/* <Tabs className="section__tabs" /> */}
            <CardList className="section__content" />
          </section>
        </div>
      </div>
    );
  }
}
