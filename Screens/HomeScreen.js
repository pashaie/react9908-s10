import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MenuScreen from './MenuScreen';
import ProductScreen from './ProductScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <MaterialIcons name="360" />;
        },
      })}
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
