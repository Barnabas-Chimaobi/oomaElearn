import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const HeaderView = ({children}) => {
  return <View style={style.container}>{children}</View>;
};

export {HeaderView};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
