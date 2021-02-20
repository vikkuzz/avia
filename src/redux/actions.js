/* eslint-disable import/prefer-default-export */
import Api from '../components/api/Api';

const api = new Api();

export const getSearchId = (id) => ({ type: 'searchId', id });

export const handleScroll = (e) => ({ type: 'scroll', e });

export function getId() {
  return (dispatch) => {
    api.getSearchId().then((id) => dispatch(getSearchId(id)));
  };
}

export const getTickets = (tickets, stop) => ({ type: 'getTickets', tickets, stop });

export const hasError = () => ({
  type: 'error',
});

export function ticketsFetchData(id) {
  return (dispatch) => {
    api
      .getTickets(id)
      .then(({ tickets, stop }) => {
        console.log(stop);
        dispatch(getTickets(tickets, stop));
      })
      .catch(() => dispatch(hasError()));
  };
}

export const cheaply = () => ({ type: 'cheaply' });

export const faster = () => ({ type: 'faster' });

export const dispatchAction = (transfer) => ({ type: 'allTrans', transfer });
