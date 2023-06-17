import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../helpers/colors';
import {Checkbox} from 'native-base';
import {SORABOLD, SORAMEDIUM} from '../../font';

class AgreementCheck extends React.Component<any, any> {
  render() {
    return (
      <View>
        <Checkbox color={Colors.day_mode.primary} value="one" my={2}>
          <View style={style.agreeView}>
            <Text style={style.signUp}>
              By signing up, you agree to the
              <Text style={style.terms}>
                {' '}
                Terms of Service and Privacy Policy
              </Text>
            </Text>
          </View>
        </Checkbox>
      </View>
    );
  }
}

export {AgreementCheck};

const style = StyleSheet.create({
  agreement: {
    color: Colors.day_mode.black,
  },
  agreeView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  terms: {
    fontFamily: SORABOLD,
    color: Colors.day_mode.primary,
  },
  signUp: {
    fontFamily: SORAMEDIUM,
    paddingRight: 20,
    color: Colors.day_mode.black,
  },
});
