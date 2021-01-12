import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {Button} from 'react-native-elements';
import MapView, {Marker, Geojson} from 'react-native-maps';
import Tehran from './tehran';

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

const LocationScreen = ({route, navigation}) => {
  const map = useRef(null);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    getLocation();
  }, []);

  const getLocationGHALAT = () => {
    // Geolocation.getCurrentPosition((info) => setLocation(info));
    Geolocation.getCurrentPosition(setLocation);
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition((info) => {
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      console.log(info.coords);
    });
  };
  return (
    <View>
      <Button title="Get Location" type="outline" onPress={getLocation} />
      {location && (
        <MapView ref={map} style={styles.map} initialRegion={location}>
          {/* <MapView.Circle center={location} radius={2000} /> */}
          <Marker title="سلام" coordinate={location} draggable />
          <Geojson
            geojson={Tehran}
            strokeColor="red"
            fillColor="green"
            strokeWidth={2}
          />
        </MapView>
      )}
    </View>
  );
};

export default LocationScreen;
