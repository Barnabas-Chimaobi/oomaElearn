import {View, Text, StatusBar} from 'react-native';
import React from 'react';

const StatuBar = ({bgcolor, barStyle}) => {
  return (
    <View>
      <StatusBar barStyle={barStyle} backgroundColor={bgcolor} />
    </View>
  );
};

export {StatuBar};
