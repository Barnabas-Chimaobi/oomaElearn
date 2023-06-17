import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import OtpInput from '../Components/OtpInput';

export default function SignUpOtp() {
  const goBack = require('../assets/images/Vector.png');
  const banner = require('../assets/images/amico.png');
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'default'} backgroundColor="white" />
      <View style={styles.goBackContainer}>
        <TouchableOpacity>
          <Image source={goBack} style={styles.goBackImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.bannerContainer}>
        <Image source={banner} style={styles.bannerImg} />
      </View>

      <View style={styles.verifyTxtContainer}>
        <Text style={styles.verifyTxt}>Verify your email address</Text>
      </View>
      <View style={styles.subTxtContainer}>
        <Text style={styles.subTxt}>
          Enter the 6-digit code sent to ne.wuser...........
        </Text>
      </View>
      <View>
        <OtpInput />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  goBackImg: {
    width: 24,
    height: 22.12,
  },
  goBackContainer: {
    marginTop: 52.94,
    marginLeft: 36.07,
  },
  bannerContainer: {
    marginLeft: 55,
    marginRight: 55,
    marginTop: 28.94,
    marginBottom: 32,
  },
  bannerImg: {
    width: 250,
    height: 248.22,
  },
  verifyTxt: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    color: '#3E2056',
  },
  verifyTxtContainer: {
    marginLeft: 42.5,
  },
  subTxt: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#3E2056',
  },
  subTxtContainer: {
    marginLeft: 24,
    marginTop: 8,
  },
});
