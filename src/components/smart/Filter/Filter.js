import React from 'react';
import { useDispatch, connect } from 'react-redux';

import { transfers } from '../../../redux/actions';

import './Filter.scss';

const Filter = ({ transfer }) => {
  const dispatch = useDispatch();

  if (transfer === 'all') {
    const elements = document.querySelectorAll('label > input');
    for (const elem of elements) {
      elem.checked = true;
    }
  }

  return (
    <div className="filter">
      <span className="filter__header">Количество пересадок</span>
      <div className="filter__inputs">
        <label className="filter__item" id="all">
          <input type="checkbox" value="all" onClick={(e) => dispatch(transfers(e.target.value))} />
          Все
        </label>
        <label className="filter__item" id="without">
          <input type="checkbox" />
          Без пересадок
        </label>
        <label className="filter__item" id="one">
          <input type="checkbox" />1 пересадка
        </label>
        <label className="filter__item" id="two">
          <input type="checkbox" />2 пересадки
        </label>
        <label className="filter__item" id="three">
          <input type="checkbox" />3 пересадки
        </label>
      </div>
    </div>
  );
};

const mapStateToprops = (state) => ({
  count: state.count,
  getTickets: state.tickets,
  cheaply: state.cheaply,
  faster: state.faster,
  transfer: state.transfer,
});

export default connect(mapStateToprops)(Filter);
