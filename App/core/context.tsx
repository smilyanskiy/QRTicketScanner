import React, {createContext, useReducer, useContext} from 'react';
import {ticketsReducer, initialState} from './reducer';
import {ticketState, Action} from './productTypes';

const init = {
  state: initialState,
  dispatch: () => null,
};

interface initType {
  state: ticketState;
  dispatch: React.Dispatch<Action>;
}

export const CommonContext = createContext<initType>(init);

export const TicketsProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(ticketsReducer, initialState);
  return (
    <CommonContext.Provider value={{state, dispatch}}>
      {children}
    </CommonContext.Provider>
  );
};

export const TicketContext = () => useContext(CommonContext);
