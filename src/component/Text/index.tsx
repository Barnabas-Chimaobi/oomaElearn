import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../helpers/colors';
import {POPPINSREGULAR} from '../../font';

const Texts = ({children, textStyles}) => {
  return (
    <View>
      <Text style={[style.text, textStyles]}>{children}</Text>
    </View>
  );
};

export {Texts};

const style = StyleSheet.create({
  text: {
    color: Colors.day_mode.black,
    paddingVertical: 10,
    fontFamily: POPPINSREGULAR,
  },
});
