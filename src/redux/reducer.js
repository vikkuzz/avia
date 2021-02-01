/* eslint-disable no-param-reassign */
const reducer = (state = {}, action) => {
  if (action.type === 'searchId') {
    state.id = action.id;
    return state.id;
  }
  return state;
};

export default reducer;
