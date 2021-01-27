import React from 'react';

import './Card.scss';

const Card = () => (
  <div className="card">
    <div className="card__price">
      13999
      <img alt="logo" src="S7Logo.png" />
    </div>
    <div className="card__info">
      <span>MOW – HKT</span>
    </div>
  </div>
);

export default Card;
