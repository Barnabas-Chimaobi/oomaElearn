import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, ButtonGroup, withTheme, Text} from '@rneui/themed';
import {images} from '../../assets';

const ButtonIcon = props => {
  return (
    <View style={[style.viewContainer]}>
      <TouchableOpacity style={[{flexDirection: 'row'}, props.buttonContainer]}>
        {props.image}
        {/* <Image style={style.imageStyle} source={images.google} /> */}
        <Text style={[style.textStyle, props.buttonText]}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {ButtonIcon};

const style = StyleSheet.create({
  imageStyle: {
    height: 25,
    width: 25,
  },
  viewContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textStyle: {
    paddingLeft: 5,
    paddingTop: 3,
  },
});
