import React from 'react';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {View, StyleSheet} from 'react-native';
import {useQRScanner} from '../../hooks';
import {mainProps} from '../../models';
import FilterButtonGroup from '../FilterButtonGroup';

const QRScan: React.FC<mainProps> = ({navigation}) => {
  const {onScaning} = useQRScanner(navigation);

  return (
    <View style={styles.flexalble}>
      <QRCodeScanner
        topContent={<FilterButtonGroup style={styles.flexalble} />}
        onRead={onScaning}
      />
    </View>
  );
};

export default QRScan;

const styles = StyleSheet.create({
  flexalble: {
    flex: 1,
  },
});
