import React from 'react';
import {Button, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            title: 'محصولات',
            headerRight: () => (
              <Button onPress={() => alert('This is a button!')} title="Info" />
            ),
          }}
          name="Products"
          component={ProductScreen}
        />
        <Stack.Screen name="Setings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
