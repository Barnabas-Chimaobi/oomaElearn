import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput} from 'react-native';
import {
  Button,
  InputItem,
  List,
  View,
  WingBlank,
} from '@ant-design/react-native';
import {Colors} from '../../helpers/colors';
import {SORALIGHT, SORAREGULAR, SORABOLD, SORASEMIBOLD} from '../../font';

const Input = props => {
  return (
    // <WingBlank>
    <View style={style.inputView}>
      <TextInput
        onChangeText={props.onchange}
        value={props.value}
        placeholderTextColor={props.placeholderTextColor}
        style={[style.input, props.inputStyle]}
        placeholder={props.placeholder}
      />
    </View>
    // </WingBlank>
  );
};

export {Input};

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: Colors.day_mode.white,
    borderRadius: 5,
    borderColor: Colors.day_mode.black,
    fontFamily: SORAREGULAR,
    color: Colors.day_mode.black,
    fontSize: 13,
    height: 40,
    opacity: 0.5,
    marginBottom: 10,
  },
  inputView: {},
});
