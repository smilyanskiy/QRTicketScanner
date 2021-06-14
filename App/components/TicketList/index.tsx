import React from 'react';

import {SwipeListView} from 'react-native-swipe-list-view';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import ItemsList from './ItemsList';
import {DetailsScreenNavigationProp} from '../../models';
import {oneTicket} from '../../core';

type detailsProps = {
  navigation: DetailsScreenNavigationProp;
  refreshing: boolean;
  setRefreshing: Function;
  deleteTicket: Function;
  list: oneTicket[];
};

const TicketList: React.FC<detailsProps> = ({
  navigation,
  refreshing,
  setRefreshing,
  deleteTicket,
  list,
}) => (
  <SwipeListView
    data={list}
    renderItem={(props) => <ItemsList {...props} navigation={navigation} />}
    keyExtractor={({createdAt}) => `${createdAt}`}
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
    leftOpenValue={200}
    stopLeftSwipe={200}
    rightOpenValue={-200}
  />
);

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
