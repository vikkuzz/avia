/* eslint-disable no-cond-assign */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd';

import { handleScroll } from '../../../redux/actions';

import './Cardlist.scss';

const Card = React.lazy(() => import('../../stupid/Card'));

const Cardlist = () => {
  const tickets = useSelector((state) => state.tickets);
  const cheaply = useSelector((state) => state.cheaply);
  const faster = useSelector((state) => state.faster);
  const without = useSelector((state) => state.without);
  const one = useSelector((state) => state.one);
  const two = useSelector((state) => state.two);
  const three = useSelector((state) => state.three);
  const ticketsForView = useSelector((state) => state.ticketsForView);

  const dispatch = useDispatch();

  const arrTickets = JSON.parse(JSON.stringify(tickets));

  if (cheaply) {
    arrTickets.sort((prev, next) => {
      if (prev.price < next.price) return -1;
      if (prev.price < next.price) return 1;
    });
  }
  if (faster) {
    arrTickets.sort((prev, next) => {
      if (prev.segments[0].duration < next.segments[0].duration) return -1;
      if (prev.segments[0].duration < next.segments[0].duration) return 1;
    });
  }

  function checkFilter(w, o, tw, th, arr) {
    const propsArr = [w, o, tw, th];
    const resultArr = [];
    propsArr.forEach((prop, i) => {
      if (prop) {
        arr.map((item) => {
          if (item.segments[0].stops.length === i) {
            resultArr.push(item);
          }
        });
      }
    });

    return resultArr;
  }

  let arrs = [];

  arrs = checkFilter(without, one, two, three, arrTickets);

  let elem = arrs.map((item, i) =>
    i < ticketsForView ? <Card key={Date.now() * Math.random()} itemProps={item} /> : null
  );

  if (arrs.length < 1) {
    elem = 'Рейсов, подходящих под заданные фильтры, не найдено';
  }
  return (
    <div className="section" onScroll={(e) => dispatch(handleScroll(e))}>
      <Suspense fallback={<Spin />}>{elem}</Suspense>
    </div>
  );
};

export default Cardlist;
