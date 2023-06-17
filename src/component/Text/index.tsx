import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../helpers/colors';

const Texts = props => {
  return (
    <View>
      <Text style={[style.text, props.text]}>{props.children}</Text>
    </View>
  );
};

export {Texts};

const style = StyleSheet.create({
  text: {
    color: Colors.day_mode.black,
  },
});
