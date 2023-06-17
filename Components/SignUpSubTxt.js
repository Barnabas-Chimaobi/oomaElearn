import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Colors from '../utils/Colors'

export default function SignUpSubTxT ()  {
      
    return (
      <View>
        <Text style={styles.txt}>Type in your email address to begin
your registration.</Text>
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
marginRight: 50,
// fontFamily: "PoppinsRegular"
    }
})