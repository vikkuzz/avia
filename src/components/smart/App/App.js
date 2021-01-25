import React from 'react';

import Filter from '../Filter';

import './App.scss';

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <header className="header">
          <img alt="logo" className="logo" src="./Logo.svg" />
        </header>
        <div className="container">
          <Filter className="filter container__left-side" />
          <section className="section container__right-side">
            {/* <Tabs className="section__tabs" />
            <CardList className="section__content" /> */}
          </section>
        </div>
      </>
    );
  }
}
