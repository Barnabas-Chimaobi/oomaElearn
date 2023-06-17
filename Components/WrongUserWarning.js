import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function WrongUserWarning() {
  return (
    <View>
      <Text style={styles.text}>Wrong username or password</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontStyle: "normal",
fontWeight: "400",
fontSize: 14,
lineHeight: 21,
color: Colors.warningTxt1,
    }
})