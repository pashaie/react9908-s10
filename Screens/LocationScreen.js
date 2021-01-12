import React from 'react';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Button} from 'react-native-elements';

const LocationScreen = ({route, navigation}) => {
  const getLocation = () => {
    Geolocation.getCurrentPosition((info) => console.log(info));
  };
  return (
    <View>
      <Text>LocationScreen</Text>
      <Button title="Get Location" type="outline" onPress={getLocation} />
    </View>
  );
};

export default LocationScreen;
