/* eslint-disable import/prefer-default-export */
import Api from '../components/api/Api';

const api = new Api();
export const getTickets = (tickets) => ({ type: 'getTickets', tickets });

export function ticketsFetchData() {
  return (dispatch) => {
    api
      .getTickets()
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((tickets) => dispatch(getTickets(tickets)));
  };
}

export const cheaply = () => ({ type: 'cheaply' });

export const faster = () => ({ type: 'faster' });

export const dispatchAction = (transfer) => ({ type: 'allTrans', transfer });
