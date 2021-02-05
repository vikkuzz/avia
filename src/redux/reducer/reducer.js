/* eslint-disable no-param-reassign */

const reducer = (state = { count: 0, tickets: [], cheaply: true, faster: false, transfer: null }, action) => {
  switch (action.type) {
    case 'getTickets':
      state.tickets = action.tickets;
      return { ...state };

    case 'inc':
      state.count += 1;
      return { ...state };

    case 'cheaply':
      return { ...state, cheaply: true, faster: false };

    case 'faster':
      return { ...state, faster: true, cheaply: false };

    case 'transfer':
      state.transfer = action.trans;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
