import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Buttons, Container, Dropdowns, Input, Texts} from '../../component';
import {BUBBLEREGULAR, POPPINSMEDIUM, POPPINSREGULAR} from '../../font';
import {Colors} from '../../helpers/colors';
import {width} from '../../helpers/utils';

const SignUp2 = () => {
  return (
    <View>
      <Container>
        <Texts textStyles={styles.continue}>Continue sign up</Texts>
        <View style={styles.container}>
          <View style={styles.input1View}>
            <Input placeholder="First name" inputStyle={styles.input1} />
            <Input placeholder="Last name" inputStyle={styles.input1} />
          </View>
          <Input placeholder="Username" inputStyle={styles.input2} />
          <Input placeholder="Password" inputStyle={styles.input2} />
          <Input placeholder="Confirm password" inputStyle={styles.input2} />
          <View style={styles.selectView}>
            <Text style={styles.selectCaption}>Select Language</Text>
            <Dropdowns
              textStyle={styles.defautButtonStyle}
              buttonText="English"
              buttonStyle={styles.buttonDropStyle}
            />
          </View>
          <Text style={styles.textView}>
            <Text>By clicking Agree and continue below, You agree to our</Text>
            <Text>
              <Text style={styles.terms}>Terms & Conditions</Text>
              <Text> and </Text>
              <Text style={styles.terms}>Privacy Policy.</Text>
            </Text>
          </Text>
          <Buttons
            titleStyle={styles.titleStyle}
            buttonStyle={styles.buttonStyle}
            title="Agree and continue"
          />
        </View>
      </Container>
    </View>
  );
};

export {SignUp2};

const styles = StyleSheet.create({
  continue: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 22,
    color: Colors.day_mode.primary,
    textAlign: 'center',
    paddingVertical: 20,
  },
  input1View: {
    flexDirection: 'row',
    // alignSelf: 'center',
    justifyContent: 'space-between',
    // flex: 1,
  },
  input1: {
    width: width * 0.45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    marginBottom: 20,
  },
  input2: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 0,
    marginBottom: 20,
  },
  buttonStyle: {
    backgroundColor: Colors.day_mode.btnColor2,
    marginTop: 40,
  },
  titleStyle: {},
  container: {
    marginTop: 40,
  },
  textView: {
    textAlign: 'center',
    paddingHorizontal: 41,
    paddingTop: 10,
    fontFamily: POPPINSREGULAR,
    fontSize: 13,
  },
  terms: {
    color: Colors.day_mode.primary2,
  },
  buttonDropStyle: {
    width: width * 0.4,
    alignSelf: 'flex-end',
    top: 0,
    borderRadius: 0,
    height: 35,
    marginVertical: 0,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 1,
    backgroundColor: Colors.day_mode.white,
    borderBottomColor: Colors.day_mode.primary,
  },
  defaultButtonStyle: {
    color: Colors.day_mode.primary,
  },
  selectView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    paddingBottom: 8,
    borderColor: Colors.day_mode.borderColor1,
    marginVertical: 15,
  },
  selectCaption: {
    paddingTop: 10,
  },
  defautButtonStyle: {
    color: Colors.day_mode.primary,
  },
});
