import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
// import {TicketContext, setIsExpired} from '../../core';
import {formatDate} from '../utils';

const ItemsList = ({navigation, item, index}) => {
  return (
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
          {item.isExpired ? (
            <ListItem.Subtitle style={styles.notActual}>
              билет использован
            </ListItem.Subtitle>
          ) : (
            <ListItem.Subtitle style={styles.createdAt}>
              {`создано: ${formatDate(item.createdAt)}`}
            </ListItem.Subtitle>
          )}
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
      </ListItem.Content>
      <ListItem.Chevron size={20} activeOpacity={0.7} color="black" />
    </ListItem>
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
  disabled: {
    color: '#D3D3D3',
    textDecorationStyle: 'solid',
  },
  disabledColor: {
    color: '#808080',
  },
  notActual: {
    fontWeight: 'bold',
    color: '#9f0000',
    fontSize: 10,
  },
  infoBlock: {
    flex: 1,
    width: '100%',
  },
});

export default ItemsList;
