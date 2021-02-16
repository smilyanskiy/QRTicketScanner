import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TicketsProvider} from '../../core';
import {NAVIGATIONS} from './componentsMap';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TicketsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {NAVIGATIONS.map(({name, component, options}, index) => (
            <Stack.Screen
              key={`${index}_${name}`}
              name={name}
              component={component}
              options={options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </TicketsProvider>
  );
};

export default App;
