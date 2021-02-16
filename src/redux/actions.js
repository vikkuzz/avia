/* eslint-disable import/prefer-default-export */
import Api from '../components/api/Api';

const api = new Api();
export const getTickets = (tickets) => ({ type: 'getTickets', tickets });

export const hasError = () => ({
  type: 'error',
});

export function ticketsFetchData() {
  return (dispatch) => {
    api
      .getTickets()
      .then((tickets) => dispatch(getTickets(tickets)))
      .catch(() => dispatch(hasError()));
  };
}

export const cheaply = () => ({ type: 'cheaply' });

export const faster = () => ({ type: 'faster' });

export const dispatchAction = (transfer) => ({ type: 'allTrans', transfer });
