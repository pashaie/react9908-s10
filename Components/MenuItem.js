import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const MenuItem = ({ title, onPress }) => {
  return (
    <View style={styles.menuItemConainer}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemConainer: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10,
    marginTop: 10,
    fontSize: 20,
    flexBasis: '50%',
  },
});

export default MenuItem;
