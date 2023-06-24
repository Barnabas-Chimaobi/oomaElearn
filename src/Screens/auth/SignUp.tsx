import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  Buttons,
  Input,
  StatuBar,
  Background,
  Texts,
  ButtonIcon,
} from '../../component';
import Welcome from '../../assets/images/explore.svg';
import {Colors} from '../../helpers/colors';
import {WingBlank, WhiteSpace} from '@ant-design/react-native';
import {Divider} from 'native-base';
// import Google from '../assets/images/Google.svg';
import {width} from '../../helpers/utils';
import {BUBBLEREGULAR} from '../../font';
import Google from '../../assets/images/Google.svg';

const SignUp = () => {
  return (
    <View>
      <Background>
        <StatuBar bgcolor={Colors.day_mode.primary1} />
        <WhiteSpace size="xl" />
        <Welcome height={150} width={150} />
        <Texts textStyles={styles.text}>
          Type in your email address to begin your registration.
        </Texts>
        {/* <Texts textStyles={styles.titleStyle}>Enter Email</Texts> */}
        <Input placeholder="kizito@gmail.com" />
        {/* <Texts textStyles={styles.forgotPasstxt}>Forgot password?</Texts> */}
        <Buttons
          buttonText={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          title="Continue"
        />
        <View style={styles.dividerView}>
          <Divider size={0.45} style={styles.divider} />
          <Texts textStyles={styles.signwith}>OR</Texts>
          <Divider size={0.45} style={styles.divider} />
        </View>
        <ButtonIcon
          buttonText={styles.buttonGoogleText}
          buttonContainer={styles.googleButton}
          title="Sign in with Google"
          image={<Google height={50} width={50} />}
        />
        <WhiteSpace size="xl" />
      </Background>
    </View>
  );
};

export {SignUp};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signwith: {
    textAlign: 'center',
    color: Colors.day_mode.black,
    marginTop: -10,
    paddingHorizontal: 5,
    fontFamily: BUBBLEREGULAR,
    fontSize: 28,
  },
  googleButton: {
    borderColor: Colors.day_mode.borderColor1,
    borderWidth: 2,
    // marginRight: 10,
    // paddingVertical: 8,
    alignSelf: 'center',
    borderRadius: 5,
    width: width * 0.88,
    paddingHorizontal: 25,
    marginTop: 10,
  },
  divider: {
    width: width * 0.38,
    // opacity:,
    color: Colors.day_mode.black,
    marginTop: 15,
  },
  dividerView: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 70,
    marginBottom: 35,
  },
  buttonGoogleText: {
    color: Colors.day_mode.black,
    fontSize: 22,
    paddingTop: 9,
  },

  loginTxtView: {
    marginLeft: 24,
    marginRight: 24,
  },
  forgotPasstxt: {
    fontSize: 17,
    color: Colors.day_mode.warningTxt1,
    paddingTop: 20,
    textAlign: 'right',
  },
  forgotPasstxtView: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 32,
    marginBottom: 32,
    marginRight: 24,
  },
  registerTxt: {
    fontSize: 14,
    color: Colors.day_mode.primary,
    textAlign: 'center',
    paddingVertical: 25,
  },
  registerTxtView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  line: {
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
  textContainer: {
    // display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -17,
  },
  text: {
    fontStyle: 'normal',
    color: Colors.day_mode.primary,
    paddingBottom: 30,
  },
  buttonStyle: {
    backgroundColor: Colors.day_mode.btnColor2,
    marginTop: 50,
  },
  buttonText: {
    color: Colors.day_mode.black,
  },
  titleStyle: {
    color: Colors.day_mode.gray,
    paddingBottom: 3,
  },
});
