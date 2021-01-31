import React from 'react';

import Card from '../../stupid/Card';

import './Cardlist.scss';

export default class Cardlist extends React.Component {
  state = {};

  render() {
    return (
      <div className="section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
