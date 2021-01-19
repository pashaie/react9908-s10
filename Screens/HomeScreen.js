import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MenuScreen from './MenuScreen';
import ProductScreen from './ProductScreen';
import LocationScreen from './LocationScreen';
import CameraScreen from './CameraScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return <MaterialIcons size={30} name="360" />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'purple',
      }}>
      <Tab.Screen name="خانه" component={MenuScreen} />
      <Tab.Screen name="محصولات" component={ProductScreen} />
      <Tab.Screen name="موقیعت" component={LocationScreen} />
      <Tab.Screen name="دوربین" component={CameraScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
