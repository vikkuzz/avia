import React from 'react';
import { connect } from 'react-redux';

import Card from '../../stupid/Card';

import './Cardlist.scss';

const Cardlist = ({ tickets }) => {
  console.log(tickets);

  return (
    <div className="section">
      <Card />
    </div>
  );
};

const mapStateToprops = (state) => ({
  state,
  tickets: state.tickets,
});

export default connect(mapStateToprops)(Cardlist);
