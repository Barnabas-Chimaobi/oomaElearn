import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Button, Icon, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {Colors} from '../../helpers/colors';
import {Background} from '../backgroundColor';
import LinearGradient from 'react-native-linear-gradient';
import {SORABOLD} from '../../font';

const Buttons = props => {
  return (
    <View>
      {/* <WhiteSpace /> */}
      <TouchableOpacity>
        <Background backgroundStyle={style.linearGradient}>
          <Text style={[style.titleStyle, props.buttonText]}>
            {props.title}
          </Text>
        </Background>
      </TouchableOpacity>
    </View>
  );
};

export {Buttons};

const style = StyleSheet.create({
  buttonBackground: {
    backgroundColor: Colors.day_mode.gradientBackground,
    borderColor: Colors.day_mode.primary1,
  },
  linearGradient: {
    borderRadius: 50,
    height: Dimensions.get('window').height * 0.06,
    alignItems: 'center',
    marginTop: 50,
    elevation: 10,
    // alignContent: 'center',
  },
  titleStyle: {
    paddingVertical: Dimensions.get('window').height * 0.015,
    // fontSize: 15,
    color: Colors.day_mode.white,
    fontFamily: SORABOLD,
    // textAlign: 'center',
  },
});
