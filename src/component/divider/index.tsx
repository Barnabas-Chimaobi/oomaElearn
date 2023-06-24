import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Divider} from 'native-base';
import {width} from '../../helpers/utils';
import {Colors} from '../../helpers/colors';

const Dividers = ({style}) => {
  return (
    <View>
      <Divider size={0.48} style={[styles.divider, style]} />
    </View>
  );
};

export {Dividers};

const styles = StyleSheet.create({
  divider: {
    width: width * 0.92,
    // opacity:,
    color: Colors.day_mode.black,
    marginTop: 5,
    alignSelf: 'center',
  },
});
