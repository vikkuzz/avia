import React from 'react';

import './Filter.scss';

export default class Filter extends React.Component {
  state = {};

  render() {
    return (
      <div className="filter">
        <span className="filter__header">Количество пересадок</span>
        <div className="filter__inputs">
          <label className="filter__item">
            <input type="checkbox" />
            Все
          </label>
          <label className="filter__item">
            <input type="checkbox" />
            Без пересадок
          </label>
          <label className="filter__item">
            <input type="checkbox" />1 пересадка
          </label>
          <label className="filter__item">
            <input type="checkbox" />2 пересадки
          </label>
          <label className="filter__item">
            <input type="checkbox" />3 пересадки
          </label>
        </div>
      </div>
    );
  }
}
