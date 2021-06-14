import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import FixedButton from '../FixedButton';
import TicketList from '../TicketList';
import FilterButtonGroup from '../FilterButtonGroup';
import {DetailsProps} from '../../models';
import {useTicketList} from '../../hooks';

const Main = ({navigation}: DetailsProps) => {
  const {refreshing, setRefreshing, list, deleteTicket} = useTicketList();
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FilterButtonGroup />
        <TicketList
          refreshing={refreshing}
          setRefreshing={setRefreshing}
          navigation={navigation}
          deleteTicket={deleteTicket}
          list={list}
        />
      </SafeAreaView>
      <FixedButton name="plus" navigation={navigation} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
