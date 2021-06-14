import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TicketsProvider} from '../../core';
import {NAVIGATIONS} from './componentsMap';
import {RootStackParamList} from '../../models';

const Stack = createStackNavigator<RootStackParamList>();
// const type = ["Main", "QRScanner", "Details"]
interface navigationProps {
  name: any;
  component: React.FC<any>;
  options: Object;
}

const App = () => {
  return (
    <TicketsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {NAVIGATIONS.map(
            ({name, component, options}: navigationProps, index) => (
              <Stack.Screen
                key={`${index}_${name}`}
                name={name}
                component={component}
                options={options}
              />
            ),
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </TicketsProvider>
  );
};

export default App;
