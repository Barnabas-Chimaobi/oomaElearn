import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Colors from '../utils/Colors'

export default function LoginErrorSubTxT ()  {
      
    return (
      <View>
        <Text style={styles.txt}>Looks like you entered the wrong details,
Try again.</Text>
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