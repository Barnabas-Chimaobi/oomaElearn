import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Svg, {Circle, G} from 'react-native-svg';
import {Colors} from '../../helpers/colors';
import Icon from 'react-native-vector-icons/AntDesign';

const NextButton = ({percentage, scrollTo}) => {
  console.log(percentage, 'percentage=======');
  const size = 50;
  const center = size / 2;
  const strokeWidth = 2;
  const radius = size / 2 - strokeWidth / 2;
  const circunference = radius * 2 * Math.PI;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: any) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    const runFunc = () => {
      console.log('kjhgfdsdfghjkl');
      progressAnimation.addListener(
        value => {
          const strokeDashoffset =
            circunference - (circunference * value.value) / 100;
          console.log(strokeDashoffset, 'offset=====');
          if (progressRef?.current) {
            progressRef.current.setNativeProps({
              strokeDashoffset,
            });
          }
        },
        [percentage],
      );
    };

    runFunc();
  }, [progressRef]);

  return (
    <View style={style.container}>
      <Svg width={size} height={size}>
        <G rotation={'-90'} origin={center}>
          <Circle
            stroke="#E6E7E8"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          {/* <Text
          stroke="purple"
          fontSize="15"
          x={size / 2}
          y={size / 2}
          textAnchor="middle">
          Hey
        </Text> */}
          <Circle
            ref={progressRef}
            fill={Colors.day_mode.white}
            stroke={Colors.day_mode.primary1}
            cx={center}
            cy={center}
            r={radius}
            strokeDasharray={circunference}
            strokeWidth={strokeWidth}
            // strokeDashoffset={circunference - (circunference * 25) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity style={style.button}>
        <Icon name="right" size={15} color={Colors.day_mode.black} />
      </TouchableOpacity>
    </View>
  );
};

export {NextButton};

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    borderRadius: 100,
    padding: 10,
    backgroundColor: Colors.day_mode.lightBackground,
  },

  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
