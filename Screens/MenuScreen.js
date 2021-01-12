import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

import MenuItem from '../Components/MenuItem';

const MenuScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      {/* <StatusBar hidden ></StatusBar> */}
      <StatusBar backgroundColor="purple" barStyle="light-content-content" />
      <ScrollView>
        <View>
          <Text style={styles.logo}>Session 10</Text>
        </View>
        <View style={styles.container}>
          <MenuItem
            title="محصولات"
            onPress={() => navigation.navigate('Products')}
          />
          <MenuItem title="دسته ها" />
          <MenuItem title="پروفایل" />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 1})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 2})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 3})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 4})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 5})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 6})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 7})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 8})}
          />
          <MenuItem
            title="تنظیمات"
            onPress={() => navigation.navigate('Setings', {id: 9})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 25,
    backgroundColor: 'silver',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  container: {
    paddingTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default MenuScreen;
