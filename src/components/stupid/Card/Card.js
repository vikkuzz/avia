/* eslint-disable prefer-const */
import React from 'react';

import time from '../../../utils/getTime';

import './Card.scss';

const Card = ({ card }) => {
  const { origin, destination, date, stops, duration } = card.segments[0];

  const {
    origin: origin1,
    destination: destination1,
    date: date1,
    stops: stops1,
    duration: duration1,
  } = card.segments[1];

  return (
    <div className="card">
      <div className="card__price">
        {card.price} P
        <img alt="logo" src={`https://pics.avs.io/99/36/${card.carrier}.png`} />
      </div>
      <div className="card__info">
        <div className="card__titles">
          <span className="card__info-title">
            {origin} – {destination}
          </span>
          <span className="card__info-title">В ПУТИ</span>
          <span className="card__info-title">ПЕРЕСАДКИ</span>
        </div>
        <div className="card__info-data">
          <span className="card__data">{time(date, duration)}</span>
          <span className="card__data">{`${(duration / 60).toFixed()}ч ${duration % 60}мин`}</span>
          <span className="card__data">{stops.length > 0 ? stops.join(',') : 'без пересадок'}</span>
        </div>
      </div>
      <div className="card__info">
        <div className="card__titles">
          <span className="card__info-title">
            {origin1} – {destination1}
          </span>
          <span className="card__info-title">В ПУТИ</span>
          <span className="card__info-title">ПЕРЕСАДКИ</span>
        </div>
        <div className="card__info-data">
          <span className="card__data">{time(date1, duration1)}</span>
          <span className="card__data">{`${(duration1 / 60).toFixed()}ч ${duration1 % 60}мин`}</span>
          <span className="card__data">{stops1.length > 0 ? stops1.join(',') : 'без пересадок'}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
