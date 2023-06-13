import { View, Text, Image, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import LoginScreenSubTxT from '../Components/LoginScreenSubTxT'
import FirstLoginForm from '../Components/FirstLoginForm'
import LoginBtn1 from '../Components/LoginBtn1'
import SignInWithGoogle from '../Components/SignInWithGoogle'
import SecondLoginForm from '../Components/SecondLoginForm'
import LoginBtn2 from '../Components/LoginBtn2'

export default function Login2() {
    const imageUrl = require("../assets/image5.png")
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar hidden style="auto" backgroundColor='white' />
    <View style={styles.imgBgView}>
    
        <ImageBackground source={imageUrl} style={styles.imagestyle}>
        <Text style={styles.text}>Welcome
back!</Text>
      </ImageBackground>
    </View>
    <View style={styles.loginTxtView}>
      <LoginScreenSubTxT/>
    </View>
    <View>
      <SecondLoginForm/>
    </View>
    <TouchableOpacity style={styles.forgotPasstxtView}>
      <Text style={styles.forgotPasstxt}>Forgot password?</Text>
    </TouchableOpacity>
    <View>
      <LoginBtn2/>
    </View>
    <TouchableOpacity style={styles.registerTxtView}>
      <Text style={styles.registerTxt}>Register</Text>
    </TouchableOpacity>

    {/* OR TEXT AND LINES */}

    <View>
      <View style={styles.line} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>OR</Text>
      </View>
      {/* <View style={styles.line} /> */}
    </View>
    <View style={styles.googleSignView}>
      <SignInWithGoogle/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    imagestyle: {
        width: 200,
        height: 200,
        marginLeft: 24,
        marginRight: 166,
        marginTop: 32
    },
    text: {
        fontWeight: "400",
fontSize: 16.578,
color: "#614378",
marginTop: 113.33,
marginLeft: 97.36,
// marginRight: 16.64,
lineHeight: 19,
display: "flex",
alignItems: "flex-end"
// fontFamily: 'Bubblegum Sans'
    },
    imgBgView: {
        backgroundColor: "#DBDFEA",
    },
    loginTxtView: {
      marginLeft: 24,
      marginRight: 24
    },
    forgotPasstxt: {
      fontStyle: "normal",
fontWeight: "400",
fontSize: 19,
lineHeight: 24,

color: "rgba(255, 64, 64, 0.87)",
    },
    forgotPasstxtView: {
      display: "flex",
alignItems: "flex-end",
marginTop: 32,
marginBottom: 32,
marginRight: 24,
    },
    registerTxt: {
      fontStyle: "normal",
fontWeight: "500",
fontSize: 14,
lineHeight: 21,
color: "#614378",
    },
    registerTxtView: {
      display: "flex",
alignItems: "center",
marginTop: 32,
marginBottom: 16
    },
    line: {
      borderBottomColor: '#D7D7D7',
      borderBottomWidth: 1,
      marginHorizontal: 20,
      marginTop: 20,
    },
    textContainer: {
      // display: "flex",
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: -17,
    },
    text: {
      backgroundColor: 'white',
      paddingHorizontal: 10,
      fontStyle: "normal",
fontWeight: "400",
fontSize: 28,
lineHeight: 33,
color: "#3E2056",
    },
    googleSignView: {
      marginLeft: 24,
      marginRight: 24,
      marginTop: 16
    }
})