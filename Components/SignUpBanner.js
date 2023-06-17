import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function SignUpBanner() {
    const imageUrl = require("../assets/image5.png")
  return (
    <View>
      <View style={styles.imgBgView}>
    
    <ImageBackground source={imageUrl} style={styles.imagestyle}>
        <View style={styles.textContainer}>
    <Text style={styles.text}>Let’s 
Explore</Text>
</View>
  </ImageBackground>
</View>
    </View>
  )
}

const styles = StyleSheet.create({
    imagestyle: {
        width: 200,
        height: 200,
        // marginLeft: 24,
        marginRight: 166,
        marginTop: 32,
        // marginRight: 16.64
    },
    textContainer:{
        marginTop: 113.33,
marginLeft: 97.36,
marginRight: 16.64,
display: "flex",
alignItems: "flex-end"
    },
    text: {
        fontWeight: "400",
fontSize: 16.578,
color: Colors.signUpSubTxt,
lineHeight: 19,
// fontFamily: 'Bubblegum Sans'
    },
    imgBgView: {
        // backgroundColor: "#DBDFEA",
    },
})