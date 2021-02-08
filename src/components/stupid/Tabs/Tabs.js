import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { cheaply, faster } from '../../../redux/actions';

import './Tabs.scss';

const Tabs = (state) => {
  const dispatch = useDispatch();
  const className = `tabs__btn`;

  useEffect(() => {
    const btn1 = document.querySelector('.tabs__btn');
    const btn2 = document.getElementById('faster');

    if (state.cheaply) {
      btn1.classList.add('tabs__btn--active');
    } else if (!state.cheaply) {
      btn1.classList.remove('tabs__btn--active');
    }

    if (state.faster) {
      btn2.classList.add('tabs__btn--active');
    } else if (!state.faster) {
      btn2.classList.remove('tabs__btn--active');
    }
  });

  return (
    <div className="tabs">
      <button type="submit" className={className} id="cheaply" onClick={() => dispatch(cheaply())}>
        дешево
      </button>
      <button type="submit" className={className} id="faster" onClick={() => dispatch(faster())}>
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
