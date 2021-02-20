import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

import { dispatchAction } from '../../../redux/actions';

import './Filter.scss';

const Filter = (state) => {
  const dispatch = useDispatch();
  const elements = document.querySelectorAll('label > input');

  const checkState = (states, element) => {
    for (const elem of element) {
      const { value } = elem;
      if (states[value]) {
        elem.checked = true;
      } else if (!state[value]) {
        elem.checked = false;
      }
    }
  };

  useEffect(() => {
    checkState(state, elements);
  });

  return (
    <div className="filter">
      <span className="filter__header">Количество пересадок</span>
      <div className="filter__inputs">
        <label className="filter__item" id="all">
          <input type="checkbox" value="all" onClick={(e) => dispatch(dispatchAction(e.target.value))} defaultChecked />
          Все
        </label>
        <label className="filter__item" id="without">
          <input
            type="checkbox"
            value="without"
            onClick={(e) => dispatch(dispatchAction(e.target.value))}
            defaultChecked
          />
          Без пересадок
        </label>
        <label className="filter__item" id="one">
          <input type="checkbox" value="one" onClick={(e) => dispatch(dispatchAction(e.target.value))} defaultChecked />
          1 пересадка
        </label>
        <label className="filter__item" id="two">
          <input type="checkbox" value="two" onClick={(e) => dispatch(dispatchAction(e.target.value))} defaultChecked />
          2 пересадки
        </label>
        <label className="filter__item" id="three">
          <input
            type="checkbox"
            value="three"
            onClick={(e) => dispatch(dispatchAction(e.target.value))}
            defaultChecked
          />
          3 пересадки
        </label>
      </div>
    </div>
  );
};

const mapStateToprops = (state) => ({
  all: state.all,
  without: state.without,
  one: state.one,
  two: state.two,
  three: state.three,
});

export default connect(mapStateToprops)(Filter);
