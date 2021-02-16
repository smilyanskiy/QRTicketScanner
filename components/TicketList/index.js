import React from 'react';

import {ListItem} from 'react-native-elements';
import {SwipeListView} from 'react-native-swipe-list-view';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {formatDate} from '../utils';
import {TicketContext, setTickets} from '../../core';

const TicketList = ({navigation}) => {
  const {state, dispatch} = TicketContext();
  const {tickets, activeSide} = state;
  const list = tickets
    .sort((a, b) => b.createdAt - a.createdAt)
    .sort((a, b) => b.isExpired - a.isExpired)
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
      renderItem={({item, index}) => (
        <ListItem
          bottomDivider
          onPress={() =>
            navigation.push('Details', {
              way: item.side,
              expired: item.isExpired,
              key: item.createdAt,
              index,
            })
          }>
          <ListItem.Content>
            <View style={styles.infoBlock}>
              <ListItem.Subtitle style={styles.createdAt}>
                {`создано: ${formatDate(item.createdAt)}`}
              </ListItem.Subtitle>
            </View>
            <ListItem.Title
              style={[styles.name, item.isExpired && styles.disabledColor]}>
              {item.name}
            </ListItem.Title>
            <ListItem.Subtitle
              style={[
                styles.subtitleFont,
                item.isExpired && styles.disabled,
              ]}>{`${item.way_from} - ${item.way_to}`}</ListItem.Subtitle>
            <ListItem.Subtitle
              style={[
                styles.subtitleFont,
                item.isExpired && styles.disabled,
              ]}>{`${item.departure_time} - ${item.arrival_time}`}</ListItem.Subtitle>
            <ListItem.Subtitle style={styles.notActual}>
              билет использован
            </ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron size={20} activeOpacity={0.7} color="black" />
        </ListItem>
      )}
      keyExtractor={(item, index) => `${item.createdAt}_${index}`}
      renderHiddenItem={({item}) => (
        <TouchableOpacity
          style={styles.delButton}
          onPress={() => deleteTicket(item.createdAt)}>
          <View>
            <Text style={styles.delete}>Удалить</Text>
          </View>
        </TouchableOpacity>
      )}
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
  subtitleFont: {
    fontSize: 12,
  },
  createdAt: {
    fontSize: 10,
  },
  name: {
    color: '#245c78',
    fontWeight: 'bold',
  },
  delButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#e45a54',
    paddingHorizontal: 20,
  },
  delete: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  disabled: {
    color: '#D3D3D3',
    // textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  disabledColor: {
    color: '#808080',
  },
  notActual: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#9f0000',
  },
});
export default TicketList;
