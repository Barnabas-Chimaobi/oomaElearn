import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../helpers/colors';

const Background = ({children, backgroundStyle}) => {
  return (
    <View>
      <LinearGradient
        start={{x: 1, y: 0}}
        // end={{x: 0.3, y: 0.1}}
        colors={[
          Colors.day_mode.primary2,
          Colors.day_mode.primary1,
          Colors.day_mode.primary,
        ]}
        style={[styles.linearGradient, backgroundStyle]}>
        {children}
      </LinearGradient>
    </View>
  );
};

export {Background};
const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: Dimensions.get('window').height,
  },
});
