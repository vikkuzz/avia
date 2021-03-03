/* eslint-disable no-param-reassign */
const initialState = {
  tickets: [],
  cheaply: true,
  faster: false,
  stop: false,
  searchId: null,
  ticketsForView: 10,
};

const tickets = (state = initialState, action) => {
  switch (action.type) {
    case 'Get_Search_Id':
      state.searchId = action.id;
      return { ...state };

    case 'Handle_scroll':
      if (action.e.target.scrollTop > action.e.target.scrollHeight - 1150) {
        state.ticketsForView += 20;
      }

      return { ...state };

    case 'Get_Tickets':
      state.tickets = [...state.tickets, ...action.tickets];
      if (action.stop) {
        state.stop = true;
      }
      return { ...state };

    case 'Get_Cheaply_Tickets':
      return { ...state, cheaply: true, faster: false };

    case 'Get_Fastest_Tickets':
      return { ...state, faster: true, cheaply: false };

    default:
      return state;
  }
};

export default tickets;
