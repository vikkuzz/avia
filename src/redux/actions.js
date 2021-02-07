/* eslint-disable import/prefer-default-export */
export const getTickets = (tickets) => ({ type: 'getTickets', tickets });

export const inc = () => ({ type: 'inc' });

export const cheaply = () => ({ type: 'cheaply' });

export const faster = () => ({ type: 'faster' });

export const dispatchAction = (transfer) => ({ type: 'allTrans', transfer });

// export const allTrans = (all) => ({ type: 'allTrans', all });

// export const withoutAll = (without) => ({ type: 'withoutAll', without });

// export const withOne = (one) => ({ type: 'withOne', one });

// export const withTwo = (two) => ({ type: 'withTwo', two });

// export const withThree = (three) => ({ type: 'withThree', three });
