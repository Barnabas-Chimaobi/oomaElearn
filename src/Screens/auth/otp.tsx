import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import React from 'react';
import {HeaderView} from '../../component/header/view';
import Icon from 'react-native-vector-icons/AntDesign';
import CodeInput from 'react-native-confirmation-code-input';
import {Colors} from '../../helpers/colors';
import {Buttons} from '../../component';
import {WingBlank} from '@ant-design/react-native';
import {
  BUBBLEREGULAR,
  POPPINSBOLD,
  POPPINSMEDIUM,
  POPPINSREGULAR,
} from '../../font';
import Verify from '../../assets/images/verify.svg';

const dimensions = Dimensions.get('window').width;

const OTP = () => {
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
        <Verify style={style.verifyImage} />
        <View>
          <Text style={style.enterVerification}>Verify your email address</Text>
        </View>
        <Text style={style.enterCode}>
          Enter the 6-digit code sent to +234 000 0000
        </Text>
        <CodeInput
          //   compareWithCode="12345"
          codeLength={6}
          onChange={item => {
            console.log(item);
          }}
          className="border-b"
          secureTextEntry
          activeColor={Colors.day_mode.onboardText}
          inactiveColor={Colors.day_mode.onboardText}
          autoFocus={false}
          ignoreCase={true}
          inputPosition="center"
          size={40}
          onFulfill={(isValid, code) => {
            // console.log(code, 'console==='), gotoResetPin(code);
          }}
          //   containerStyle={{paddingVertical: 70}}
          codeInputStyle={style.codeInputStyle}
        />
        <Buttons
          buttonText={style.buttonText}
          title="Verify"
          buttonStyle={style.buttonStyle}
        />
        <Text style={style.resendCode}>Resend Code</Text>
      </WingBlank>
    </View>
  );
};

export {OTP};

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
    // paddingTop: 15,
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
    backgroundColor: Colors.day_mode.primary2,
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
});
