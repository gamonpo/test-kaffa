import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import NumberOne from '../pages/NumberOne';
import NumberFour from '../pages/NumberFour';
import NumberFive from '../pages/NumberFive';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'KAFFA mobile',
            headerStyle: {
              backgroundColor: '#F79629',
            },
          }}
        />
        <Stack.Screen
          name="NumberOne"
          component={NumberOne}
          options={{
            title: '1. Validate CNPJ',
            headerTitleStyle: {
              fontSize: 15,
            },
          }}
        />
        <Stack.Screen
          name="NumberFour"
          component={NumberFour}
          options={{
            title: '4. Simple Todo List',
            headerTitleStyle: {
              fontSize: 15,
            },
          }}
        />
        <Stack.Screen
          name="NumberFive"
          component={NumberFive}
          options={{
            title: '5. Rest Client',
            headerTitleStyle: {
              fontSize: 15,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
