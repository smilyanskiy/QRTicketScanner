import React from 'react';

import QRCodeScanner from 'react-native-qrcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, StyleSheet} from 'react-native';
import {TicketContext} from '../../core';
import {filterTicketInfo} from '../../utils';
import FilterButtonGroup from '../FilterButtonGroup';

const QRScan = ({navigation}) => {
  const {state} = TicketContext();
  const {activeSide} = state;
  const onSuccess = async (e) => {
    try {
      const createdAt = new Date().getTime();
      const ticket = filterTicketInfo(e.data, createdAt, activeSide);
      ticket && (await AsyncStorage.setItem(`${createdAt}`, ticket));
      navigation.push('Main');
    } catch (e) {
      /** TODO - show error in QRCodeScanner */
      console.error(e);
    }
  };

  return (
    <View style={styles.qrscan}>
      <QRCodeScanner
        topContent={<FilterButtonGroup style={styles.paddingTop} />}
        onRead={(e) => onSuccess(e)}
      />
    </View>
  );
};

export default QRScan;

const styles = StyleSheet.create({
  qrscan: {
    flex: 1,
  },
  paddingTop: {
    flex: 1,
    paddingTop: 20,
  },
});
