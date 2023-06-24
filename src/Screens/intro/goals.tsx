import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {HeaderView} from '../../component/header/view';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../helpers/colors';
import {Buttons, Container, Input} from '../../component';
import {WingBlank} from '@ant-design/react-native';
import {
  BUBBLEREGULAR,
  POPPINSBOLD,
  POPPINSMEDIUM,
  POPPINSREGULAR,
} from '../../font';
import {Checkbox} from 'native-base';
import Goal from '../../assets/images/goalmage.svg';
import Goal1 from '../../assets/images/goalmage2.svg';
import Goal2 from '../../assets/images/goalmage3.svg';
import Goal3 from '../../assets/images/goalmage4.svg';
import Goal4 from '../../assets/images/goalmage5.svg';

const dimensions = Dimensions.get('window').width;

const Goals = () => {
  const ageRange = [
    {age: 'Get better grades', goal: <Goal width={40} height={40} />},
    {age: 'Get more knowledge', goal: <Goal1 width={40} height={40} />},
    {age: 'Compete in class', goal: <Goal2 width={40} height={40} />},
    {age: 'Help others', goal: <Goal3 width={40} height={40} />},
    {age: 'Be productive', goal: <Goal4 width={40} height={40} />},
  ];

  return (
    <View style={style.container}>
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
      <Container>
        <View>
          <Text style={style.enterVerification}>
            What are your primary learning goals?
          </Text>
        </View>
        <View>
          {ageRange?.map(item => {
            return (
              <TouchableOpacity style={style.ageButton}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    {item?.goal}
                    <Text style={style.ageText}>{item.age}</Text>
                  </View>
                  <View>
                    <Checkbox
                      style={{
                        marginTop: 12,
                        marginRight: 10,
                        borderRadius: 50,
                      }}
                      accessibilityLabel="Select this option"
                      borderWidth={1}
                      borderColor={Colors.day_mode.gray}
                      colorScheme={'purple'}
                      onChange={() => {
                        // pickSubject(item);
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <Buttons
          buttonText={style.buttonText}
          title="Continue"
          buttonStyle={style.buttonStyle}
        />
      </Container>
    </View>
  );
};

export {Goals};

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
    marginTop: 60,
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
  ageButton: {
    marginTop: 20,
    width: dimensions * 0.9,
    alignSelf: 'center',
    backgroundColor: Colors.day_mode.lightBackground,
    paddingVertical: 10,
    borderRadius: 10,
    // alignItems: 'center',
    borderColor: Colors.day_mode.primary1,
    borderWidth: 1,
  },
  ageText: {
    color: Colors.day_mode.primary,
    fontFamily: BUBBLEREGULAR,
    paddingTop: 10,
    fontSize: 18,
    paddingLeft: 5,
  },
});
