/* eslint-disable no-unused-expressions */
/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../stupid/Card';

import './Cardlist.scss';

const Cardlist = () => {
  const tickets = useSelector((state) => state.tickets);
  const cheaply = useSelector((state) => state.cheaply);
  const faster = useSelector((state) => state.faster);
  const all = useSelector((state) => state.all);
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
    const arrW = [];
    const arrO = [];
    const arrTw = [];
    const arrTh = [];
    if (w) {
      arr.map((item) => {
        if (item.segments[0].stops.length === 0) {
          arrW.push(item);
        }
      });
    }
    if (o) {
      arr.map((item) => {
        if (item.segments[0].stops.length === 1) {
          arrW.push(item);
        }
      });
    }
    if (tw) {
      arr.map((item) => {
        if (item.segments[0].stops.length === 2) {
          arrW.push(item);
        }
      });
    }
    if (th) {
      arr.map((item) => {
        if (item.segments[0].stops.length === 3) {
          arrW.push(item);
        }
      });
    }
    const newArr = [...arrW, ...arrO, ...arrTw, ...arrTh];

    return newArr;
  }
  let arrs = [];

  arrs = checkFilter(without, one, two, three, arrTickets);

  let elem = arrs.map((item, i) => (i < 10 ? <Card key={Date.now() * Math.random()} itemProps={item} /> : null));

  if (arrs.length < 1) {
    elem = 'Рейсов, подходящих под заданные фильтры, не найдено';
  }
  if (error) {
    elem = 'Обновите страницу';
  }
  return <div className="section">{elem}</div>;
};

export default Cardlist;
