/* eslint-disable array-callback-return */
import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../stupid/Card';

import './Cardlist.scss';

const Cardlist = () => {
  const tickets = useSelector((state) => state.tickets);
  const elem = tickets.map((item, i) => (i < 4 ? <Card key={Date.now() * Math.random()} itemProps={item} /> : null));
  return <div className="section">{elem}</div>;
};

export default Cardlist;
