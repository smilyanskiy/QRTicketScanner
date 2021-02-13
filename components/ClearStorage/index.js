import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Overlay, Text} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ClearStorage = ({navigation, route}) => {
  const [visible, setVisible] = useState(route.params.isVisible);

  const toggleOverlay = () => {
    setVisible(!visible);
    navigation.navigate('Билеты');
  };

  const clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View style={styles.container}>
      <Overlay
        overlayStyle={styles.overlayTab}
        isVisible={visible}
        onBackdropPress={() => toggleOverlay()}>
        <View>
          <Text h4 style={styles.questions}>
            Are you sure you want to delete all the data?
          </Text>
          <View style={styles.buttons}>
            <Button
              buttonStyle={styles.accept}
              titleStyle={styles.titleColor}
              onPress={() => clear()}
              title="Agree"
              type="outline"
              raised
            />
            <Button
              buttonStyle={styles.decline}
              titleStyle={styles.titleColor}
              onPress={() => toggleOverlay()}
              title="Decline"
              type="outline"
              raised
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlayTab: {
    width: '80%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
  },
  questions: {
    textAlign: 'center',
    padding: 6,
  },
  accept: {
    borderColor: '#fff',
    backgroundColor: '#019688',
  },
  titleColor: {
    color: '#fff',
  },
  decline: {
    borderColor: '#fff',
    backgroundColor: '#eb1561',
  },
});

export default ClearStorage;
