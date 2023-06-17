import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, WhiteSpace, WingBlank} from '@ant-design/react-native';

class Cards extends React.Component<any, any> {
  render() {
    return (
      <View style={{paddingTop: 30}}>
        <Card full>
          <Card.Body>
            <View style={{height: 42}}>
              <Text style={{marginLeft: 16, color: 'black'}}>Card Content</Text>
            </View>
          </Card.Body>
        </Card>
      </View>
    );
  }
}

export {Cards};

const style = StyleSheet.create({});
