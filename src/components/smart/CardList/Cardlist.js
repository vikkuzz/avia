/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import Card from '../../stupid/Card';

import './Cardlist.scss';

const Cardlist = () => {
  const tickets = useSelector((state) => state.tickets);
  const cheaply = useSelector((state) => state.cheaply);
  const faster = useSelector((state) => state.faster);
  const without = useSelector((state) => state.without);
  const one = useSelector((state) => state.one);
  const two = useSelector((state) => state.two);
  const three = useSelector((state) => state.three);
  const error = useSelector((state) => state.error);

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

  let elem = arrs.map((item) => <Card key={Date.now() * Math.random()} itemProps={item} /> || <Spin size="large" />);

  if (arrs.length < 1) {
    elem = 'Рейсов, подходящих под заданные фильтры, не найдено';
  }
  if (error) {
    elem = 'Обновите страницу';
  }
  return <div className="section">{elem}</div>;
};

export default Cardlist;
