import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../helpers/colors';
import {SORABOLD, SORASEMIBOLD, SORAREGULAR} from '../../font';
import Intro1 from '../../assets/images/intro1.svg';
import Intro2 from '../../assets/images/intro2.svg';
import Intro3 from '../../assets/images/intro3.svg';
import {Buttons} from '../button';
import {NextButton} from './nextButton';

const {width, height} = Dimensions.get('window');

const Slides = props => {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: 'flex-end', margin: 20}}>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
      {props.item.key == 1 ? (
        <Intro2 height={250} width={280} style={styles.introImage} />
      ) : props.item.key == 2 ? (
        <Intro1 height={250} width={280} style={styles.introImage} />
      ) : (
        <Intro3 height={250} width={280} style={styles.introImage} />
      )}
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.subtitle}>{props.item.subtitle}</Text>
        {props.item.subtitle1 && (
          <Text style={styles.subtitle1}>{props.item.subtitle1}</Text>
        )}
        {props.item.subtitle2 && (
          <Text style={styles.subtitle1}>. {props.item.subtitle2}</Text>
        )}
      </View>
      {/* <Buttons buttonStyle={styles.buttonStyle} title="Skip" /> */}
    </View>
  );
};

export {Slides};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.day_mode.white,
    marginTop: 10,
  },
  title: {
    color: Colors.day_mode.black,
    textAlign: 'left',
    fontSize: 28,
    fontFamily: SORABOLD,
    width: width,
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  subtitle: {
    color: Colors.day_mode.gray,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: SORAREGULAR,
    width: width,
    paddingHorizontal: 45,
    paddingTop: 30,
  },
  subtitle1: {
    color: Colors.day_mode.onboardText,
    textAlign: 'left',
    fontSize: 12,
    fontFamily: SORAREGULAR,
    width: width,
    paddingHorizontal: 50,
  },
  titleView: {
    backgroundColor: Colors.day_mode.white,
    // height: height * 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  introImage: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginTop: 50,
  },
  buttonStyle: {
    backgroundColor: Colors.day_mode.white,
    borderColor: Colors.day_mode.gray,
    borderWidth: 0.5,
    borderRadius: 50,
    width: 120,
    alignSelf: 'center',
    height: 35,
    marginTop: 60,
  },
});
