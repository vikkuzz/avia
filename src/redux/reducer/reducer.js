/* eslint-disable no-param-reassign */

const reducer = (
  state = {
    count: 0,
    tickets: [],
    cheaply: true,
    faster: false,
    all: false,
    one: false,
    two: false,
    three: false,
    without: false,
  },
  action
) => {
  switch (action.type) {
    case 'getTickets':
      state.tickets = action.tickets;
      return { ...state };

    case 'cheaply':
      return { ...state, cheaply: true, faster: false };

    case 'faster':
      return { ...state, faster: true, cheaply: false };

    case 'allTrans':
      if (state.all && action.transfer === 'all') {
        state.all = false;
        state.without = false;
        state.one = false;
        state.two = false;
        state.three = false;
      } else if (!state.all && action.transfer === 'all') {
        state.all = true;
        state.without = true;
        state.one = true;
        state.two = true;
        state.three = true;
      }

      if (state.without && action.transfer === 'without') {
        state.without = false;
        state.all = false;
      } else if (!state.without && action.transfer === 'without') {
        state.without = true;
        if (state.one && state.two && state.three) {
          state.all = true;
        }
      }

      if (state.one && action.transfer === 'one') {
        state.one = false;
        state.all = false;
      } else if (!state.one && action.transfer === 'one') {
        state.one = true;
        if (state.without && state.two && state.three) {
          state.all = true;
        }
      }

      if (state.two && action.transfer === 'two') {
        state.two = false;
        state.all = false;
      } else if (!state.two && action.transfer === 'two') {
        state.two = true;
        if (state.without && state.one && state.three) {
          state.all = true;
        }
      }

      if (state.three && action.transfer === 'three') {
        state.three = false;
        state.all = false;
      } else if (!state.three && action.transfer === 'three') {
        state.three = true;
        if (state.without && state.one && state.two) {
          state.all = true;
        }
      }

      return { ...state };

    default:
      return state;
  }
};

export default reducer;
