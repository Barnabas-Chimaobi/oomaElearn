import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../helpers/colors';
import {SORABOLD} from '../../font';
import {images} from '../../assets';
import Prologo from '../../assets/images/Prologo.svg';
import {Background} from '../../component';

const Splash = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Prologo style={styles.logo} />
      </View>
    </Background>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.day_mode.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  name: {
    color: Colors.day_mode.white,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: SORABOLD,
    paddingHorizontal: 50,
  },
});
