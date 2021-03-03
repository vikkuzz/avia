/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { handleScroll } from '../../../redux/actions';
import Card from '../../stupid/Card';

import checkFilter from '../../../utils/checkFilter';

import './Cardlist.scss';

const Cardlist = () => {
  const myFilter = useSelector((state) => state.filter);
  const myTickets = useSelector((state) => state.tickets);

  const { tickets, cheaply, faster, ticketsForView } = myTickets;
  const { without, one, two, three } = myFilter;

  const dispatch = useDispatch();

  if (cheaply) {
    tickets.sort((prev, next) => {
      if (prev.price < next.price) return -1;
      if (prev.price < next.price) return 1;
    });
  }
  if (faster) {
    tickets.sort((prev, next) => {
      if (prev.segments[0].duration < next.segments[0].duration) return -1;
      if (prev.segments[0].duration < next.segments[0].duration) return 1;
    });
  }

  const arrs = checkFilter(without, one, two, three, tickets);
  let key = 1;

  const elem = arrs.map((card, i) => {
    key += 1;
    if (i < ticketsForView) {
      return <Card key={key} card={card} />;
    }
  });

  return (
    <div className="section" onScroll={(e) => dispatch(handleScroll(e))}>
      {elem}
      <span>Билетов под выбранные настройки фильтра не найдено</span>
    </div>
  );
};

export default Cardlist;
