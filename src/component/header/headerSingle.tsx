import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  Grid,
  Icon,
  SearchBar,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import {images} from '../../assets';
import {Colors} from '../../helpers/colors';
import {SORABOLD} from '../../font';
import ArrowLeft from '../../assets/images/arrowLeft.svg';

const HeaderSingle = props => {
  return (
    // <WingBlank>
    <View>
      {/* <WhiteSpace /> */}
      <View style={[style.imageContainer, props.container]}>
        <ArrowLeft />
      </View>
    </View>
    // </WingBlank>
  );
};

export {HeaderSingle};

const style = StyleSheet.create({
  imageStyle: {
    height: 20,
    width: 20,
  },
  imageContainer: {
    // alignSelf: 'center',
    backgroundColor: Colors.day_mode.white,
    // paddingVertical: 10,
  },
  textStyle: {
    color: Colors.day_mode.white,
    textAlign: 'center',
    fontFamily: SORABOLD,
    fontSize: 16,
  },
});
