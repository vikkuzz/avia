import React from 'react';

import './Filter.scss';

export default class Filter extends React.Component {
  state = {};

  render() {
    return (
      <div className="filter">
        Filter
        <input type="checkbox" />
      </div>
    );
  }
}
