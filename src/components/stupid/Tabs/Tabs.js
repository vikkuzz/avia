import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { cheaply, faster } from '../../../redux/actions';

import './Tabs.scss';

const Tabs = (state) => {
  const dispatch = useDispatch();
  const className = `tabs__btn`;

  useEffect(() => {
    if (state.cheaply) {
      const btn = document.querySelector('.tabs__btn');
      btn.focus();
      console.log(state);
    }
  });

  return (
    <div className="tabs">
      <button type="submit" className={`${className}`} onClick={() => dispatch(cheaply())}>
        дешево
      </button>
      <button type="submit" className={className} onClick={() => dispatch(faster())}>
        быстро
      </button>
    </div>
  );
};

const mapStateToprops = (state) => ({
  count: state.count,
  getTickets: state.tickets,
  cheaply: state.cheaply,
  faster: state.faster,
  transfer: state.transfer,
});

export default connect(mapStateToprops)(Tabs);
