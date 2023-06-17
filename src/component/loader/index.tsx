import {View, Text, Image, StyleSheet, Modal} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {images} from '../../assets';
import {Colors} from '../../helpers/colors';
const Loader = ({containerStyle, text}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={{
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <LottieView
          style={{height: 70, width: 100}}
          source={images.loader}
          autoPlay
          loop
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  text: {
    color: Colors.day_mode.black,
    textAlign: 'center',
    // marginLeft: 20,
    paddingTop: 20,
    marginLeft: -15,
  },
  container: {
    // backgroundColor: Colors.day_mode.white,
    // elevation: 10,
    alignSelf: 'center',
    // zIndex: 1,
    // position: 'absolute',
    padding: 10,
    // bottom: '50%',
    // opacity: 0.8,
    display: 'flex',
  },
});
