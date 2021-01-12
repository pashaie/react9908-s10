import React from 'react';
import {View, Text} from 'react-native';
const SettingsScreen = ({route, navigation}) => {
  const id = route.params.id;
  React.useLayoutEffect(() => {
    navigation.setOptions({title: 'تنظیم ' + id});
  }, [navigation, id]);

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default SettingsScreen;
