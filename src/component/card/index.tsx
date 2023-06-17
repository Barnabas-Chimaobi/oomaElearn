import React from 'react';
import {Text, View} from 'react-native';
import {Card, WhiteSpace, WingBlank} from '@ant-design/react-native';
import {SORABOLD} from '../../font';

class Cards extends React.Component<any, any> {
  render() {
    return (
      <View style={{paddingTop: 30}}>
        <Card full>
          <Card.Header
            title="Full Column"
            thumbStyle={{width: 30, height: 30}}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="this is extra"
          />
          <Card.Body>
            <View style={{height: 42}}>
              <Text
                style={{
                  marginLeft: 16,
                  color: 'black',
                  fontFamily: SORABOLD,
                }}>
                Card Content
              </Text>
            </View>
          </Card.Body>
          <Card.Footer content="footer content" extra="footer extra content" />
        </Card>
      </View>
    );
  }
}

export {Cards};