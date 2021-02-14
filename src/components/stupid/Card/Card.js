/* eslint-disable prefer-const */
import React from 'react';

import './Card.scss';

const Card = ({ itemProps }) => {
  const { origin, destination, date, stops, duration } = itemProps.segments[0];
  const time = (hm, dur) => {
    let h = new Date(Date.parse(hm)).getUTCHours();
    let m = new Date(Date.parse(hm)).getMinutes();
    if (h.toString().length < 2) {
      h = `0${h}`;
    }
    if (m.toString().length < 2) {
      m = `0${m}`;
    }

    let durH = (+(dur / 60).toFixed() + +h) % 24;
    let durM = (dur % 60) + +m;

    if (durM > 60) {
      durH += 1;
    }

    durM %= 60;

    if (durH.toString().length < 2) {
      durH = `0${durH}`;
    }
    if (durM.toString().length < 2) {
      durM = `0${durM}`;
    }

    return `${h}:${m} - ${durH}:${durM}`;
  };
  const {
    origin: origin1,
    destination: destination1,
    date: date1,
    stops: stops1,
    duration: duration1,
  } = itemProps.segments[1];

  return (
    <div className="card">
      <div className="card__price">
        {itemProps.price}
        <img alt="logo" src="S7Logo.png" />
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
