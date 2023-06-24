import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Container, Dividers, Texts} from '../../component';
import {Colors} from '../../helpers/colors';
import {
  BUBBLEREGULAR,
  POPPINSBOLD,
  POPPINSMEDIUM,
  POPPINSREGULAR,
} from '../../font';
import Setting from '../../assets/images/settings.svg';
import Edit from '../../assets/images/edit.svg';
import Switch from '../../assets/images/switch.svg';
import Badge from '../../assets/images/badge.svg';
import {width} from '../../helpers/utils';

const Profile = () => {
  const interest = [
    {title: 'Music'},
    {title: 'Mathematics'},
    {title: 'Photography'},
    {title: 'Science'},
  ];
  return (
    <View>
      <View style={style.headerContainer}>
        <View style={style.titleView}>
          <Texts textStyles={style.textStyles}>Profile</Texts>
          <Setting width={30} height={30} style={style.iconSetting} />
        </View>
        <Dividers />
        <View style={style.headerPropsContainer}>
          <View>
            <Text style={style.fullname}>Success Joseph</Text>
            <Text style={style.username}>SuccessJ1</Text>
            <Text style={style.email}>successjoseph@gmailcom</Text>
            <View style={style.genderView}>
              <Text style={style.genderTitle}>Gender:</Text>
              <Text style={style.gender}>Female</Text>
            </View>
            <View style={style.ageView}>
              <Text style={style.ageTitle}>Age range:</Text>
              <Text style={style.age}>4-8</Text>
            </View>
          </View>
          <View style={style.initialMainView}>
            <View style={style.initialView}>
              <Text style={style.initial}>SJ</Text>
              <Edit width={45} height={45} style={style.edit} />
            </View>
            <View style={style.switchView}>
              <Text style={style.switch}>Switch account</Text>
              <Switch />
            </View>
          </View>
        </View>
      </View>

      <Container>
        <View>
          <Text style={style.interest}>Interests</Text>
          <View style={style.interestListView}>
            {interest?.map((item, index) => {
              return (
                <View style={style.eachInterestView} key={index}>
                  <Text style={style.eachInterest}>{item.title}</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View>
          <Text style={style.completedJourney}>Completed journey</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={style.journeyContainer}>
              <View>
                <Text style={style.date}>09/2/2023</Text>
                <Text style={style.fullname1}>Success Joseph</Text>
                <Text style={style.successful}>has successfully completed</Text>
                <Text style={style.courseTitle}>
                  UI Vector Illustration Design
                </Text>
              </View>
              <View style={style.levelView}>
                <Text style={style.level}>Proficient</Text>
                <View style={style.switchView}>
                  <Badge />
                </View>
              </View>
            </View>
            <View style={style.journeyContainer}>
              <View>
                <Text style={style.date}>09/2/2023</Text>
                <Text style={style.fullname1}>Success Joseph</Text>
                <Text style={style.successful}>has successfully completed</Text>
                <Text style={style.courseTitle}>
                  UI Vector Illustration Design
                </Text>
              </View>
              <View style={style.levelView}>
                <Text style={style.level}>Proficient</Text>
                <View style={style.switchView}>
                  <Badge />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    </View>
  );
};

export {Profile};

const style = StyleSheet.create({
  textStyles: {
    color: Colors.day_mode.primary,
    fontFamily: BUBBLEREGULAR,
    fontSize: 28,
  },
  titleView: {
    flexDirection: 'row',
    width: width * 0.58,
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  iconSetting: {
    margin: 12,
  },
  headerContainer: {
    backgroundColor: Colors.day_mode.btnColor2,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
  },
  headerPropsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  initialView: {
    flexDirection: 'row',
  },
  initial: {
    fontSize: 40,
    fontFamily: BUBBLEREGULAR,
    color: Colors.day_mode.primary,
    borderWidth: 5,
    borderColor: Colors.day_mode.primary2,
    padding: 15,
    paddingBottom: 5,
    borderRadius: 50,
    textAlign: 'center',
  },
  edit: {
    marginLeft: -28,
    marginTop: -8,
  },
  switchView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  switch: {
    fontFamily: POPPINSMEDIUM,
    fontSize: 12,
    paddingRight: 8,
  },
  initialMainView: {
    alignItems: 'center',
    marginTop: 20,
  },
  fullname: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 25,
    color: Colors.day_mode.black,
  },
  username: {
    fontFamily: POPPINSMEDIUM,
    color: Colors.day_mode.black,
  },
  email: {
    fontFamily: POPPINSMEDIUM,
    color: Colors.day_mode.black,
  },
  ageView: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  ageTitle: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 20,
    color: Colors.day_mode.black,
  },
  age: {
    color: Colors.day_mode.black,
    padding: 3,
  },
  genderView: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  genderTitle: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 20,
    color: Colors.day_mode.black,
  },
  gender: {
    color: Colors.day_mode.black,
    padding: 3,
  },
  interest: {
    color: Colors.day_mode.black,
    fontFamily: POPPINSMEDIUM,
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
  },
  completedJourney: {
    color: Colors.day_mode.black,
    fontFamily: BUBBLEREGULAR,
    fontSize: 20,
    paddingVertical: 20,
  },
  date: {
    fontFamily: POPPINSREGULAR,
    color: Colors.day_mode.black,
    fontSize: 12,
    paddingVertical: 5,
  },
  fullname1: {
    fontFamily: BUBBLEREGULAR,
    fontSize: 20,
    color: Colors.day_mode.black,
  },
  successful: {
    fontFamily: POPPINSREGULAR,
    color: Colors.day_mode.black,
    fontSize: 12,
    paddingVertical: 5,
  },
  courseTitle: {
    fontFamily: POPPINSMEDIUM,
    fontSize: 17,
    color: Colors.day_mode.black,
    width: width * 0.5,
    paddingVertical: 20,
  },
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
  journeyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: Colors.day_mode.btnColor2,
    borderWidth: 2,
    padding: 10,
    marginRight: 15,
    width: width * 0.85,
  },
});
