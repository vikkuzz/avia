import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dispatchClickOnFilter } from '../../../redux/actions';

import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const stateFilter = useSelector((state) => state.filter);

  return (
    <div className="filter">
      <span className="filter__header">Количество пересадок</span>
      <div className="filter__inputs">
        <label className="filter__item" id="all">
          <input
            type="checkbox"
            checked={stateFilter.all}
            value="all"
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          Все
        </label>
        <label className="filter__item" id="without">
          <input
            type="checkbox"
            checked={stateFilter.without}
            value="without"
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          Без пересадок
        </label>
        <label className="filter__item" id="one">
          <input
            type="checkbox"
            checked={stateFilter.one}
            value="one"
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          1 пересадка
        </label>
        <label className="filter__item" id="two">
          <input
            type="checkbox"
            checked={stateFilter.two}
            value="two"
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          2 пересадки
        </label>
        <label className="filter__item" id="three">
          <input
            type="checkbox"
            checked={stateFilter.three}
            value="three"
            onChange={(e) => dispatch(dispatchClickOnFilter(e.target.value))}
          />
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Filter;
