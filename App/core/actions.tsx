import {oneTicket} from './productTypes';

export const GET_TICKETS = 'GET_TICKETS';
export const SET_SIDE = 'SET_SIDE';

export const setTickets = (payload: oneTicket[]) => ({
  type: GET_TICKETS,
  tickets: payload,
});

export const setSide = (payload: number) => ({
  type: SET_SIDE,
  activeSide: payload,
});
