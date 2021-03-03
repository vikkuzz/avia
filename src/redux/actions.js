import Api from '../components/services/Api';

const api = new Api();

export const getSearchId = (id) => ({ type: 'Get_Search_Id', id });

export const handleScroll = (e) => ({ type: 'Handle_scroll', e });

export const getCheaplyTickets = () => ({ type: 'Get_Cheaply_Tickets' });

export const getFastestTickets = () => ({ type: 'Get_Fastest_Tickets' });

export const dispatchClickOnFilter = (transfer) => ({ type: 'Dispatch_Click_On_Filter', transfer });

export const getTickets = (tickets, stop) => ({ type: 'Get_Tickets', tickets, stop });

export function getId() {
  return (dispatch) => {
    api.getSearchId().then((id) => dispatch(getSearchId(id)));
  };
}

export function ticketsFetchData(id) {
  return (dispatch) => {
    api
      .getTickets(id)
      .then(({ tickets, stop }) => {
        dispatch(getTickets(tickets, stop));
      })
      .catch((e) => e);
  };
}
