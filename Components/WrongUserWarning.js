import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

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
color: "rgba(255, 64, 64, 0.87)",
    }
})