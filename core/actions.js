export const GET_TICKETS = 'GET_TICKETS';
export const SET_SIDE = 'SET_SIDE';

export const setTickets = (payload) => ({
  type: GET_TICKETS,
  tickets: payload,
});

export const setSide = (payload) => ({
  type: SET_SIDE,
  activeSide: payload,
});
