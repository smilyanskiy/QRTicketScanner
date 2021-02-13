import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const FixedButton = (props) => {
  return (
    <View style={styles.icon}>
      <Icon
        {...props}
        raised
        type="font-awesome"
        reverse
        reverseColor="#1e4965"
        // color="#009789"
        color="#92c6e4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    height: 50,
  },
});

export default FixedButton;
