import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Colors from '../utils/Colors'

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
color: Colors.signUpSubTxt,
lineHeight: 21,
marginTop: 8,
// fontFamily: "PoppinsRegular"
    }
})