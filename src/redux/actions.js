/* eslint-disable import/prefer-default-export */
export const getTickets = (tickets) => ({ type: 'getTickets', tickets });

export const inc = () => ({ type: 'inc' });

export const cheaply = () => ({ type: 'cheaply' });

export const faster = () => ({ type: 'faster' });

export const dispatchAction = (transfer) => ({ type: 'allTrans', transfer });
