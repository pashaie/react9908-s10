import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MenuScreen from './MenuScreen';
import ProductScreen from './ProductScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'purple',
      }}>
      <Tab.Screen name="Home" component={MenuScreen} />
      <Tab.Screen name="Products" component={ProductScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
