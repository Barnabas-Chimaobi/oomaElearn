import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../helpers/colors';

const Container = ({children, backgroundStyle}) => {
  return (
    <View style={[styles.container, backgroundStyle]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </View>
  );
};

export {Container};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.day_mode.white,
  },
});
