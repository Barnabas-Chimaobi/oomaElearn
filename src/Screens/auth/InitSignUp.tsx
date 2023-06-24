import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Sign1 from '../../assets/images/init1.svg';
import Sign2 from '../../assets/images/init2.svg';
import Sign3 from '../../assets/images/init3.svg';
import {StatuBar, Texts} from '../../component';
import {BUBBLEREGULAR} from '../../font';
import {Colors} from '../../helpers/colors';
import {width} from '../../helpers/utils';

const InitSignUp = () => {
  return (
    <View>
      <StatuBar />
      <Texts textStyles={styles.text}>Who is signing u?</Texts>
      <View style={styles.container}>
        <TouchableOpacity style={styles.image1}>
          <Sign2 />
        </TouchableOpacity>
        <TouchableOpacity style={styles.image2}>
          <Sign1 />
        </TouchableOpacity>
        <Sign3 style={styles.image3} />
      </View>
    </View>
  );
};

export {InitSignUp};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: BUBBLEREGULAR,
    color: Colors.day_mode.primary,
    fontSize: 25,
    paddingVertical: width * 0.25,
  },
  image1: {
    // position: 'absolute',
    // paddingTop: width * 0.8,
    // transform: [{rotate: '-45deg'}],
    zIndex: 5,
    marginLeft: width * 0.2,
    // marginTop: 2,
  },
  image2: {
    zIndex: 5,
    marginRight: width * 0.05,
  },
  image3: {
    marginTop: width * -0.5,
  },
});
