import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './Main';
import QRScanner from './QRScanner';
import Details from './Details';
import {TicketsProvider} from '../core';
// import ClearStorage from './ClearStorage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TicketsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: 'Билеты',
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#2a2e7e',
              },
            }}
          />
          <Stack.Screen
            name="QRScanner"
            component={QRScanner}
            options={{
              title: 'QR Сканер',
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#2a2e7e',
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Информация по билету',
              headerTintColor: '#ffffff',
              headerStyle: {
                backgroundColor: '#2a2e7e',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TicketsProvider>
  );
};

export default App;
