import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

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
color: "#614378",
lineHeight: 21,
marginTop: 8,
// fontFamily: "PoppinsRegular"
    }
})