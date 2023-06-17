import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {images} from '../../assets';
import {Colors} from '../../helpers/colors';
import {SORABOLD, SORALIGHT} from '../../font';

const HomeHeader = ({name}) => {
  return (
    <View style={style.container}>
      <View style={style.profilePicsContainer}>
        <Image style={style.image} source={images.profile} />
        <View>
          <Text style={style.hello}>Hello {name}!</Text>
          <Text style={style.ask}>What would you like to do today?</Text>
        </View>
      </View>
      <View>
        <Image style={style.notificationImage} source={images.notification} />
      </View>
    </View>
  );
};

export {HomeHeader};

const style = StyleSheet.create({
  image: {
    height: 35,
    width: 35,
    marginRight: 10,
  },
  profilePicsContainer: {
    flexDirection: 'row',
  },
  notificationImage: {
    width: 35,
    height: 35,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hello: {
    color: Colors.day_mode.primary,
    fontFamily: SORABOLD,
    fontSize: 16,
  },
  ask: {
    color: Colors.day_mode.black,
    fontFamily: SORALIGHT,
    fontSize: 12,
  },
});
