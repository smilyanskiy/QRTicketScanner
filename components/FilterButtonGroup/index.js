import React from 'react';
import {ButtonGroup} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {TicketContext, setSide} from '../../core';

const FilterButtonGroup = () => {
  const {state, dispatch} = TicketContext();
  const {activeSide} = state;
  const buttons = ['Туда', 'Обратно'];
  return (
    <View style={styles.buttonsGroup}>
      <ButtonGroup
        onPress={(e) => dispatch(setSide(e))}
        selectedIndex={activeSide}
        buttons={buttons}
        containerStyle={styles.buttons}
        buttonContainerStyle={{backgroundColor: '#fff'}}
        selectedButtonStyle={{
          backgroundColor: '#92c6e4',
        }}
        selectedTextStyle={{color: '#1e4965'}}
        textStyle={{color: '#1e4965'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsGroup: {
    flex: 1,
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  buttons: {
    borderRadius: 8,
  },
});

export default FilterButtonGroup;
