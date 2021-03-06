import React from 'react';
import {ButtonGroup} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import {TicketContext, setSide} from '../../core';

type Props = {
  style?: Object;
};

const FilterButtonGroup: React.FC<Props> = ({style}) => {
  const {state, dispatch} = TicketContext();
  const {activeSide} = state;
  const buttons = ['Туда', 'Обратно'];
  return (
    <View style={[styles.buttonsGroup, style]}>
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
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  buttons: {
    borderRadius: 8,
  },
});

export default FilterButtonGroup;
