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
import React, {useState} from 'react';
import {
  Buttons,
  Input,
  StatuBar,
  Background,
  Texts,
  ButtonIcon,
  Container,
} from '../../component';
import Welcome from '../../assets/images/identIntro1.svg';
import {Colors} from '../../helpers/colors';
import {WingBlank, WhiteSpace} from '@ant-design/react-native';
import {Divider} from 'native-base';
// import Google from '../assets/images/Google.svg';
import {width} from '../../helpers/utils';
import {BUBBLEREGULAR, POPPINSMEDIUM} from '../../font';
import Gender1 from '../../assets/images/gender1.svg';
import Gender2 from '../../assets/images/gender2.svg';

const SelectGender = () => {
  const [gender, setGender] = useState('');

  const setGenderStatus = id => {
    setGender(id);
  };
  return (
    <View>
      <Container>
        <StatuBar bgcolor={Colors.day_mode.primary1} />
        <WhiteSpace size="xl" />
        <Welcome style={styles.image} height={200} width={200} />
        <Texts textStyles={styles.text}>Identify your gender</Texts>
        <Texts textStyles={styles.titleStyle}>
          This will be used to personalize your experience
        </Texts>

        <View style={styles.genderView}>
          <View style={{marginRight: 5}}>
            <TouchableOpacity
              onPress={() => {
                setGenderStatus('male');
              }}
              style={
                gender == 'male'
                  ? styles.buttonStyleSeleceted
                  : styles.buttonStyle1
              }>
              <Gender1 width={100} height={100} />
              <Texts
                textStyles={
                  gender == 'male'
                    ? styles.buttonTextStyleSelected
                    : styles.buttonTextStyle
                }>
                Male
              </Texts>
            </TouchableOpacity>
          </View>

          <View style={{marginLeft: 5}}>
            <TouchableOpacity
              onPress={() => {
                setGenderStatus('female');
              }}
              style={
                gender == 'female'
                  ? styles.buttonStyleSeleceted
                  : styles.buttonStyle1
              }>
              <Gender2 width={100} height={100} />
              <Texts
                textStyles={
                  gender == 'female'
                    ? styles.buttonTextStyleSelected
                    : styles.buttonTextStyle
                }>
                Female
              </Texts>
            </TouchableOpacity>
          </View>

          {/* <WhiteSpace /> */}
        </View>
        {/* <Texts textStyles={styles.forgotPasstxt}>Forgot password?</Texts> */}
        <Buttons
          buttonText={styles.buttonText}
          buttonStyle={styles.buttonStyle}
          title="Continue"
        />
      </Container>
    </View>
  );
};

export {SelectGender};

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
    fontSize: 30,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: Colors.day_mode.btnColor2,
    marginTop: 90,
  },
  buttonText: {
    color: Colors.day_mode.primary,
  },
  titleStyle: {
    color: Colors.day_mode.gray,
    paddingBottom: 3,
    paddingHorizontal: 10,
    paddingTop: 0,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  genderView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonStyle1: {
    backgroundColor: Colors.day_mode.white,
    // paddingVertical: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.day_mode.borderColor1,
    padding: 10,
  },
  buttonStyleSeleceted: {
    backgroundColor: Colors.day_mode.white,
    // paddingVertical: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: Colors.day_mode.primary,
    padding: 10,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: BUBBLEREGULAR,
  },
  buttonTextStyleSelected: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: BUBBLEREGULAR,
    color: Colors.day_mode.primary,
  },
});
