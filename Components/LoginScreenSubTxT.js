import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default function LoginScreenSubTxT ()  {
      
    return (
      <View>
        <Text style={styles.txt}>Fill in your details to resume the amazing
work you were doing!</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    txt: {
        fontWeight: "400",
fontSize: 18,
display: "flex",
alignItems: "flex-end",
color: "#614378",
lineHeight: 21,
marginTop: 8,
// fontFamily: "PoppinsRegular"
    }
})