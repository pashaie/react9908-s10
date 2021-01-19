import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Alert,
  Platform,
  TouchableHighlight,
  Image,
} from 'react-native';

// import CameraKitCameraScreen
import {CameraKitCameraScreen} from 'react-native-camera-kit';

const CameraScreen = ({route, navigation}) => {
  const [isPermitted, setIsPermitted] = useState(false);
  const [lastPic, setLastPic] = useState(null);

  const requestPermission = async (permission, title) => {
    try {
      const granted = await PermissionsAndroid.request(permission, {
        title: title,
        message: title,
      });
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const openCamera = async () => {
    if (Platform.OS === 'android') {
      if (
        await requestPermission(PermissionsAndroid.PERMISSIONS.CAMERA, 'دوربین')
      ) {
        if (
          await requestPermission(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            'WRITE_EXTERNAL_STORAGE',
          )
        ) {
          if (
            await requestPermission(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              'READ_EXTERNAL_STORAGE',
            )
          ) {
            setIsPermitted(true);
          } else {
            alert('READ_EXTERNAL_STORAGE permission denied');
          }
        } else {
          alert('WRITE_EXTERNAL_STORAGE permission denied');
        }
      } else {
        alert('دسترسی به دوربین وجود ندارد، دوباره تلاش کنید');
      }
    } else {
      setIsPermitted(true);
    }
  };

  const onBottomButtonPressed = (event) => {
    setLastPic(event.captureImages[0]);
    console.log(event.captureImages[0])
    setIsPermitted(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {isPermitted ? (
        <View style={{flex: 1}}>
          <CameraKitCameraScreen
            // Buttons to perform action done and cancel
            actions={{
              rightButtonText: 'Done',
              leftButtonText: 'Cancel',
            }}
            onBottomButtonPressed={(event) => onBottomButtonPressed(event)}
            flashImages={{
              // Flash button images
              on: require('../assets/flashon.png'),
              off: require('../assets/flashoff.png'),
              auto: require('../assets/flashauto.png'),
            }}
            cameraFlipImage={require('../assets/flip.png')}
            captureButtonImage={require('../assets/capture.png')}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.titleText}>کار با دوربین</Text>
          <TouchableHighlight onPress={openCamera} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Open Camera</Text>
          </TouchableHighlight>
          {lastPic && (
            <Image style={styles.previewImg} source={{uri: lastPic.uri}} />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  previewImg: {
    width: '100%',
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    marginTop: 32,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
});

export default CameraScreen;
