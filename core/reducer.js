import {GET_TICKETS, SET_SIDE} from './actions';

export const initialState = {
  tickets: [],
  activeSide: 0,
};

export const ticketsReducer = (state, action) => {
  // ('GET_TICKETS', state, action);
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
