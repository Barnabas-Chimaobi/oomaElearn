import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
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
import {useNavigation} from '@react-navigation/native';

const Header = props => {
  // const navigation = useNavigation();
  return (
    // <WingBlank>
    <View>
      {/* <WhiteSpace /> */}
      <View style={[style.imageContainer, props.container]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            resizeMode="contain"
            style={[style.imageStyle, props.imageStyle]}
            source={images.leftIcon}
          />
        </TouchableOpacity>
        <Text style={[style.textStyle, props.textStyle]}>{props.title}</Text>
        <View />
      </View>
    </View>
    // </WingBlank>
  );
};

export {Header};

const style = StyleSheet.create({
  imageStyle: {
    height: 20,
    width: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  textStyle: {
    color: Colors.day_mode.black,
  },
});
