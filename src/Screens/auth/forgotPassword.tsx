import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import {HeaderView} from '../../component/header/view';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../helpers/colors';
import {Buttons, Input} from '../../component';
import {WingBlank} from '@ant-design/react-native';
import {
  BUBBLEREGULAR,
  POPPINSBOLD,
  POPPINSMEDIUM,
  POPPINSREGULAR,
} from '../../font';
import Verify from '../../assets/images/forgotPassword.svg';

const dimensions = Dimensions.get('window').width;

const ForgotPassword = () => {
  return (
    <View style={style.container}>
      <WingBlank>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.day_mode.dark}
        />
        <HeaderView>
          <Icon
            style={style.icon}
            color={Colors.day_mode.black}
            size={25}
            name="arrowleft"
          />
        </HeaderView>
        <Verify height={220} width={220} style={style.verifyImage} />
        <View>
          <Text style={style.enterVerification}>
            Enter your email address to reset password
          </Text>
        </View>
        {/* <Text style={style.enterCode}>
          Enter the 6-digit code sent to +234 000 0000
        </Text> */}
        <Input placeholder="Email address" inputStyle={style.input2} />
        <Buttons
          buttonText={style.buttonText}
          title="Proceed"
          buttonStyle={style.buttonStyle}
        />
      </WingBlank>
    </View>
  );
};

export {ForgotPassword};

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.day_mode.white,
    flex: 1,
  },
  enterVerification: {
    color: Colors.day_mode.primary,
    fontSize: 25,
    fontFamily: BUBBLEREGULAR,
    textAlign: 'center',
    marginTop: 30,
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  resendCode: {
    color: Colors.day_mode.primary,
    marginTop: 25,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: POPPINSMEDIUM,
  },
  enterCode: {
    color: Colors.day_mode.primary,
    fontFamily: POPPINSREGULAR,
    paddingTop: 15,
  },
  useAnotherEmail: {
    color: Colors.day_mode.orange,
    textAlign: 'right',
    paddingVertical: 20,
  },
  icon: {
    paddingVertical: 15,
  },
  buttonStyle: {
    marginTop: 90,
    width: dimensions * 0.9,
    alignSelf: 'center',
    backgroundColor: Colors.day_mode.btnColor1,
  },
  buttonText: {
    color: Colors.day_mode.primary,
  },
  codeInputStyle: {
    borderBottomWidth: 3.5,
    // backgroundColor: Colors.day_mode.dark,
    marginVertical: 5,
    width: dimensions * 0.13,
    opacity: 0.5,
    borderColor: Colors.day_mode.primary,
  },
  verifyImage: {
    alignSelf: 'center',
  },
  input2: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    marginBottom: 20,
  },
});
