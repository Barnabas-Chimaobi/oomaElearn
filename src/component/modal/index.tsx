import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  Provider,
  Button,
  Modal,
  Toast,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native';
import {Colors} from '../../helpers/colors';
import colors from 'native-base/lib/typescript/theme/base/colors';
import {SORALIGHT, SORAREGULAR} from '../../font';

const Modals = props => {
  return (
    <View>
      <Modal
        style={[{paddingVertical: 10}, props.modalStyle]}
        title={props.title}
        transparent
        onClose={props.onClose}
        visible={props.visible}>
        <View style={[{paddingVertical: 20}, props.textContainer]}>
          <Text style={[styles.contentStyle, props.contentStyle]}>
            {props.content1}
          </Text>
          <Text style={[styles.contentStyle1, props.contentStyle1]}>
            {props.content2}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <Button
            style={styles.buttonStyle1}
            type="primary"
            onPress={props.onClose}>
            <Text style={{color: Colors.day_mode.red}}>
              {props.buttonTitle1}
            </Text>
          </Button>
          <Button
            style={styles.buttonStyle2}
            type="primary"
            onPress={props.onClose}>
            <Text style={{color: Colors.day_mode.white}}>
              {props.buttonTitle2}
            </Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export {Modals};

const styles = StyleSheet.create({
  buttonStyle1: {
    marginRight: 10,
    width: '40%',
    backgroundColor: Colors.day_mode.white,
    borderColor: Colors.day_mode.red,
    borderRadius: 50,
    height: 35,
  },
  buttonStyle2: {
    marginLeft: 10,
    width: '40%',
    backgroundColor: Colors.day_mode.primary,
    borderColor: Colors.day_mode.primary,
    borderRadius: 50,
    height: 35,
  },
  contentStyle: {
    textAlign: 'center',
    color: Colors.day_mode.black,
    fontFamily: SORAREGULAR,
    fontSize: 12,
  },
  contentStyle1: {
    textAlign: 'center',
    color: Colors.day_mode.black,
    paddingVertical: 15,
    fontFamily: SORAREGULAR,
    fontSize: 12,
  },
});
