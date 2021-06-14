import {useEffect, useState, useCallback, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TicketContext, setTickets} from '../core';
import {checkIsExpired} from '../utils';

export const useTicketList = () => {
  const {state, dispatch} = TicketContext();
  const {tickets, activeSide} = state;
  const [refreshing, setRefreshing] = useState(false);

  const list = useMemo(
    () =>
      tickets
        .filter(({side}) => activeSide === side)
        .sort(
          (a, b) =>
            b.createdAt - a.createdAt &&
            Number(a.isExpired) - Number(b.isExpired),
        ),
    [tickets, activeSide],
  );

  useEffect(() => {
    (async () => {
      // await AsyncStorage.clear();
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      const list = result.map((data) => {
        if (data.length > 0 && data[1]) {
          return JSON.parse(data[1]);
        }
      });
      const updatedList = list.map((item) => ({
        ...item,
        isExpired: checkIsExpired(item.arrival_time),
      }));
      dispatch(setTickets(updatedList));
      setRefreshing(false);
    })();
  }, [refreshing]);

  const deleteTicket = useCallback(
    async (id) => {
      try {
        await AsyncStorage.removeItem(`${id}`);
        dispatch(setTickets(tickets.filter(({createdAt}) => createdAt !== id)));
      } catch (e) {
        // console.log(e);
      }
    },
    [setTickets, tickets],
  );

  return {refreshing, setRefreshing, list, deleteTicket};
};
