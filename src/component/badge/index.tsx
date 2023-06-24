import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Badge from '../../assets/images/badge.svg';
import {BUBBLEREGULAR} from '../../font';
import {Colors} from '../../helpers/colors';

const Badge = ({title}) => {
  return (
    <View>
      <View style={style.levelView}>
        <Text style={style.level}>{title}</Text>
        <View>
          <Badge />
        </View>
      </View>
    </View>
  );
};

export {Badge};

const style = StyleSheet.create({
  levelView: {
    borderWidth: 1,
    borderColor: Colors.day_mode.btnColor2,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    alignItems: 'center',
  },
  level: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 15,
    padding: 20,
    paddingVertical: 30,
  },
});
