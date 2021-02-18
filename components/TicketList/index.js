import React from 'react';

import {SwipeListView} from 'react-native-swipe-list-view';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {TicketContext, setTickets} from '../../core';
import ItemsList from './ItemsList';

const TicketList = ({navigation, refreshing, setRefreshing}) => {
  const {state, dispatch} = TicketContext();
  const {tickets, activeSide} = state;
  const list = tickets
    .sort((a, b) => b.createdAt - a.createdAt && b.isExpired - a.isExpired)
    .filter(({side}) => activeSide === side);

  const deleteTicket = async (id) => {
    try {
      await AsyncStorage.removeItem(`${id}`);
      dispatch(setTickets(tickets.filter(({createdAt}) => createdAt !== id)));
    } catch (e) {
      // console.log(e);
    }
  };

  return (
    <SwipeListView
      data={list}
      renderItem={(props) => <ItemsList {...props} navigation={navigation} />}
      keyExtractor={(item, index) => `${item.createdAt}_${index}`}
      renderHiddenItem={({item}) => (
        <TouchableOpacity
          style={styles.delButton}
          onPress={() => deleteTicket(item.createdAt)}>
          <View style={styles.delContainer}>
            <Text style={styles.delete}>Удалить</Text>
          </View>
        </TouchableOpacity>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => setRefreshing(!refreshing)}
        />
      }
      disableRightSwipe={true}
      previewOpenDelay={2000}
      friction={1000}
      tension={40}
      leftOpenValue={100}
      stopLeftSwipe={100}
      rightOpenValue={-100}
    />
  );
};

const styles = StyleSheet.create({
  delButton: {
    flex: 1,
    backgroundColor: '#e45a54',
  },
  delContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  delete: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default TicketList;
