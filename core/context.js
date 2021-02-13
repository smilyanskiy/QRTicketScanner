import React, {createContext, useReducer, useContext} from 'react';
import {ticketsReducer, initialState} from './reducer';

export const CommonContext = createContext(initialState);

export const TicketsProvider = ({children}) => {
  const [state, dispatch] = useReducer(ticketsReducer, initialState);
  return (
    <CommonContext.Provider value={{state, dispatch}}>
      {children}
    </CommonContext.Provider>
  );
};

export const TicketContext = () => useContext(CommonContext);
