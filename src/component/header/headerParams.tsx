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
import {SORAMEDIUM, SORALIGHT, SORABOLD} from '../../font';

const HeaderParams = props => {
  return (
    // <WingBlank>
    <View style={style.mainContainer}>
      <WhiteSpace />
      <View style={[style.imageContainer, props.container]}>
        <Image
          resizeMode="contain"
          style={style.imageStyle}
          source={images.leftIcon}
        />
        <View>
          <Image source={images.more} style={style.image} />
        </View>
      </View>
      <Text style={[style.textStyleMain, props.textStyle]}>{props.title}</Text>
      <Text style={[style.textStyle, props.textStyle1]}>{props.titleone}</Text>
    </View>
    // </WingBlank>
  );
};

export {HeaderParams};

const style = StyleSheet.create({
  imageStyle: {
    height: 20,
    width: 20,
    tintColor: Colors.day_mode.white,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  textStyle: {
    color: Colors.day_mode.white,
    fontFamily: SORAMEDIUM,
    paddingBottom: 10,
  },
  textStyleMain: {
    color: Colors.day_mode.white,
    fontSize: 18,
    fontFamily: SORABOLD,
    paddingVertical: 8,
  },
  mainContainer: {
    backgroundColor: Colors.day_mode.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  image: {
    width: 30,
    height: 10,
  },
});
