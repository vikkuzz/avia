/* eslint-disable no-param-reassign */
const reducer = (state = {}, action) => {
  if (action.type === 'getTickets') {
    state.tickets = action.tickets;
    console.log('reducero');
    return state.tickets;
  }
  if (action.type === 'inc') {
    state.count += 1;
    console.log('reducerx');
    return state;
  }
  return state;
};

export default reducer;
