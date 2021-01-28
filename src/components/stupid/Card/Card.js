import React from 'react';

import './Card.scss';

const Card = () => (
  <div className="card">
    <div className="card__price">
      13999
      <img alt="logo" src="S7Logo.png" />
    </div>
    <div className="card__info">
      <div className="card__titles">
        <span className="card__info-title">MOW – HKT</span>
        <span className="card__info-title">В ПУТИ</span>
        <span className="card__info-title">ПЕРЕСАДКИ</span>
      </div>
      <div className="card__info-data">
        <span className="card__data">10:45 – 08:00</span>
        <span className="card__data">21ч 15м</span>
        <span className="card__data">HKG, JNB</span>
      </div>
    </div>
    <div className="card__info">
      <div className="card__titles">
        <span className="card__info-title">MOW – HKT</span>
        <span className="card__info-title">В ПУТИ</span>
        <span className="card__info-title">ПЕРЕСАДКИ</span>
      </div>
      <div className="card__info-data">
        <span className="card__data">10:45 – 08:00</span>
        <span className="card__data">21ч 15м</span>
        <span className="card__data">HKG, JNB</span>
      </div>
    </div>
  </div>
);

export default Card;
