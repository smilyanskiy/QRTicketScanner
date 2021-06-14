import {GET_TICKETS, SET_SIDE} from './actions';
import {ticketState, Action} from './productTypes';

export const initialState: ticketState = {
  tickets: [],
  activeSide: 0,
};

export const ticketsReducer = (state: any, action: Action) => {
  // console.log('ticketsReducer', state, action);
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.tickets,
      };
    case SET_SIDE:
      return {
        ...state,
        activeSide: action.activeSide,
      };
    default:
      return {...state};
  }
};
