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
  Container,
} from '../../component';
import Welcome from '../../assets/images/identIntro.svg';
import {Colors} from '../../helpers/colors';
import {WingBlank, WhiteSpace} from '@ant-design/react-native';
import {Divider} from 'native-base';
// import Google from '../assets/images/Google.svg';
import {width} from '../../helpers/utils';
import {BUBBLEREGULAR} from '../../font';
import Google from '../../assets/images/Google.svg';

const BeginIntro = () => {
  return (
    <View>
      <Container>
        <StatuBar bgcolor={Colors.day_mode.primary1} />
        <WhiteSpace size="xl" />
        <Welcome style={styles.image} height={200} width={200} />
        <Texts textStyles={styles.text}>We’re happy you’re here with us!</Texts>
        <Texts textStyles={styles.titleStyle}>
          In order to personalize your experience we’ll be asking you a few
          questions
        </Texts>
        {/* <Texts textStyles={styles.forgotPasstxt}>Forgot password?</Texts> */}
        <Buttons
          buttonText={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          title="Let's begin"
        />
      </Container>
    </View>
  );
};

export {BeginIntro};

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
    fontFamily: BUBBLEREGULAR,
    fontSize: 40,
    paddingHorizontal: 10,
  },
  buttonStyle: {
    backgroundColor: Colors.day_mode.primary,
    marginTop: 90,
  },
  buttonText: {
    color: Colors.day_mode.white,
  },
  titleStyle: {
    color: Colors.day_mode.gray,
    paddingBottom: 3,
    paddingHorizontal: 10,
    paddingTop: 0,
  },
  image: {
    marginTop: width * 0.2,
  },
});
