import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FixedButton from '../FixedButton';
import TicketList from '../TicketList';
import {TicketContext, setTickets} from '../../core';
import FilterButtonGroup from '../FilterButtonGroup';
import {checkIsExpired} from '../utils';

const Main = (props) => {
  const {dispatch} = TicketContext();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    (async () => {
      // await AsyncStorage.clear();
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      const list = result.map((data) => JSON.parse(data[1])) || [];
      const updatedList = list.map((item) => ({
        ...item,
        isExpired: checkIsExpired(item.departure_time),
      }));
      await dispatch(setTickets(updatedList));
      setRefreshing(false);
    })();
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FilterButtonGroup />
        <TicketList
          refreshing={refreshing}
          setRefreshing={setRefreshing}
          {...props}
        />
      </SafeAreaView>
      <FixedButton
        name="plus"
        onPress={() => props.navigation.push('QRScanner')}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
