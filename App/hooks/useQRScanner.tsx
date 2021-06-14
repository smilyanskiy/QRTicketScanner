import {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TicketContext} from '../core';
import {filterTicketInfo} from '../utils';
import {MainScreenNavigationProp} from '../models';

export const useQRScanner = (navigation: MainScreenNavigationProp) => {
  const {state} = TicketContext();
  const {activeSide} = state;
  const onScaning = useCallback(
    async (event) => {
      try {
        const createdAt = new Date().getTime();
        const ticket = filterTicketInfo({
          ticket: event.data,
          createdAt,
          activeSide,
        });
        ticket && (await AsyncStorage.setItem(`${createdAt}`, ticket));
        // navigation.push('Main');
        navigation.reset({routes: [{name: 'Main'}]});
      } catch (error) {
        console.warn('Неправильный QR код');
      }
    },
    [activeSide],
  );

  return {onScaning};
};
