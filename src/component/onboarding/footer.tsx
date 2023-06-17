import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../helpers/colors';
import {Buttons} from '../button';
import {NextButton} from './nextButton';

const {width, height} = Dimensions.get('window');

const Footer = (props, {navigation}) => {
  const ref = useRef();
  //   const navigation = useNavigation();
  const renderIndicator = index => {
    const isActive = props.currentSlideIndex === index;
    return (
      <View style={{margin: 2}}>
        <View
          key={index}
          style={[styles.indicator, isActive && styles.active]}
        />
      </View>
    );
  };

  const scrollTo = () => {
    // props.scrollfunc();
    console.log(props.currentSlideIndex, props.slideList.length);
    if (props.currentSlideIndex < props.slideList.length - 1) {
      props?.refs?.current?.scrollToIndex({index: props.currentSlideIndex + 1});
    } else {
      console.log('kjhgfdsdfghjkl;');
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.indicators}>
        {props.slideList?.map((_, index) => renderIndicator(index))}
      </View>
      <View style={styles.buttonContainer}>
        <NextButton
          scrollTo={scrollTo}
          percentage={
            (props?.currentSlideIndex + 1) * (100 / props.slideList.length)
          }
        />
        {/* <Buttons
          onpress={() => navigation.navigate('Signup')}
          buttonStyle={styles.buttonStyleSignup}
          buttonText={styles.buttonTextSignUp}
          title="Get Started"
        /> */}
      </View>
    </View>
  );
};

export {Footer};
const styles = StyleSheet.create({
  footer: {
    // height: height * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    backgroundColor: Colors.day_mode.primary1,
    width: 10,
    borderRadius: 5,
    height: 10,
    marginHorizontal: 3,
  },
  buttonContainer: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyleSignup: {
    backgroundColor: Colors.day_mode.cardColor,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: Colors.day_mode.cardColor,
    width: width * 0.8,
  },
  buttonTextSignUp: {
    color: Colors.day_mode.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  active: {
    backgroundColor: Colors.day_mode.primary,
    width: 25,
    borderRadius: 10,
    height: 13,
    marginTop: -1.5,
  },
});
