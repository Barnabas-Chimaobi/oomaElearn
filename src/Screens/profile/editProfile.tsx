import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderView} from '../../component/header/view';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../helpers/colors';
import {Container, Input, Selects, Dropdowns, Buttons} from '../../component';
import Edit from '../../assets/images/edit.svg';
import {BUBBLEREGULAR, POPPINSMEDIUM} from '../../font';
import {width} from '../../helpers/utils';
import {Checkbox} from 'native-base';

const EditProfile = () => {
  const interest = [
    {title: 'Music'},
    {title: 'Mathematics'},
    {title: 'Photography'},
    {title: 'Science'},
  ];
  return (
    <View style={{}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.day_mode.dark}
      />
      <Container>
        <HeaderView>
          <Icon
            style={style.icon}
            color={Colors.day_mode.black}
            size={25}
            name="arrowleft"
          />
        </HeaderView>
        <View style={style.avatarView}>
          <Text style={style.initial}>SJ</Text>
          <View style={style.changeView}>
            <Edit width={30} height={30} style={style.edit} />
            <Text style={style.change}>Change Avatar</Text>
          </View>
        </View>
        <View style={style.inputView}>
          <Input inputStyle={style.inputStyle} value="Success" />
          <Input inputStyle={style.inputStyle} value="Joseph" />
          <Dropdowns
            textStyle={style.textStyle}
            buttonStyle={style.buttonStyle}
            buttonText={'Gender'}
          />
          <Dropdowns
            textStyle={style.textStyle}
            buttonStyle={style.buttonStyle}
            buttonText={'Age Range'}
          />
        </View>
        <View>
          <Text style={style.interest}>Interests</Text>
          <View style={style.interestListView}>
            {interest?.map((item, index) => {
              return (
                <View style={style.eachInterestView} key={index}>
                  <Text style={style.eachInterest}>{item.title}</Text>
                  <View>
                    <Checkbox
                      style={{
                        marginTop: 2,
                        marginLeft: 10,
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
              );
            })}
          </View>
        </View>
        <Buttons
          buttonText={style.buttonText}
          buttonStyle={style.buttonStyleSave}
          title="Save"
        />
      </Container>
    </View>
  );
};

export {EditProfile};

const style = StyleSheet.create({
  icon: {
    paddingVertical: 15,
  },
  avatarView: {
    marginTop: -40,
  },
  initial: {
    fontSize: 35,
    fontFamily: BUBBLEREGULAR,
    borderWidth: 5,
    borderColor: Colors.day_mode.primary2,
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.day_mode.primary,
    padding: 20,
    borderRadius: 50,
    paddingBottom: 15,
    backgroundColor: Colors.day_mode.btnColor2,
  },
  edit: {},
  change: {
    paddingTop: 5,
    fontFamily: POPPINSMEDIUM,
    color: Colors.day_mode.primary,
  },
  changeView: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: Colors.day_mode.primary2,
    padding: 5,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  inputView: {
    marginTop: 40,
  },
  inputStyle: {
    borderColor: Colors.day_mode.primary2,
    borderWidth: 1.2,
    padding: 10,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.day_mode.lightBackground,
    color: Colors.day_mode.black,
    fontFamily: POPPINSMEDIUM,
    opacity: 1,
  },
  buttonStyle: {
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
    height: 50,
    marginVertical: 5,
    paddingLeft: 5,
    borderWidth: 1.2,
    borderColor: Colors.day_mode.primary2,
    backgroundColor: Colors.day_mode.lightBackground,
    top: 0,
  },
  textStyle: {
    fontFamily: POPPINSMEDIUM,
  },
  buttonText: {
    color: Colors.day_mode.white,
  },
  buttonStyleSave: {
    backgroundColor: Colors.day_mode.primary,
  },
  interest: {
    color: Colors.day_mode.black,
    fontFamily: BUBBLEREGULAR,
    fontSize: 20,
    paddingVertical: 10,
  },
  interestListView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  eachInterest: {
    fontFamily: POPPINSMEDIUM,
    fontSize: 16,
    color: Colors.day_mode.black,
    textAlign: 'center',
  },
  eachInterestView: {
    backgroundColor: Colors.day_mode.btnColor2,
    padding: 8,
    width: width * 0.43,
    margin: 5,
    borderRadius: 50,
    flexDirection: 'row',
  },
});
