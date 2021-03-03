/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCheaplyTickets, getFastestTickets } from '../../../redux/actions';

import './Tabs.scss';

const Tabs = () => {
  const dispatch = useDispatch();

  const cheaply = useRef(null);
  const faster = useRef(null);

  const handleClick = (ref) => {
    if (ref.current.id === 'cheaply') {
      ref.current.classList.add('tabs__btn--active');
      faster.current.classList.remove('tabs__btn--active');
    }
    if (ref.current.id === 'faster') {
      ref.current.classList.add('tabs__btn--active');
      cheaply.current.classList.remove('tabs__btn--active');
    }
  };

  return (
    <div className="tabs">
      <button
        type="button"
        className="tabs__btn tabs__btn--active"
        id="cheaply"
        ref={cheaply}
        onClick={() => {
          dispatch(getCheaplyTickets());
          handleClick(cheaply);
        }}
      >
        дешево
      </button>
      <button
        type="button"
        className="tabs__btn"
        id="faster"
        ref={faster}
        onClick={() => {
          dispatch(getFastestTickets());
          handleClick(faster);
        }}
      >
        быстро
      </button>
    </div>
  );
};

export default Tabs;
