import React, {useEffect, useRef} from 'react';
import {Button, AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeProvider} from 'react-native-elements';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import SettingsScreen from './Screens/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
    }

    appState.current = nextAppState;
    // setAppStateVisible(appState.current);
    console.log('AppState', appState.current);
  };

  return (
    <ThemeProvider>
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
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                />
              ),
            }}
            name="Products"
            component={ProductScreen}
          />
          <Stack.Screen name="Setings" component={SettingsScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
