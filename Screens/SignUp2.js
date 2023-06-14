import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SignUpBanner from '../Components/SignUpBanner'
import SignUpSubTxT from '../Components/SignUpSubTxt'
import SignUpEmailForm from '../Components/SignUpEmailForm'
import SignInWithGoogle from '../Components/SignInWithGoogle'

export default function SignUp2() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
      <View>
        <SignUpBanner/>
      </View>
      <View>
        <SignUpSubTxT/>
      </View>
      <View style={styles.form}>
        <SignUpEmailForm/>
      </View>

{/* OR TEXT AND LINES */}

      <View>
      <View style={styles.line} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>OR</Text>
      </View>
      {/* <View style={styles.line} /> */}
    </View>
    <View style={styles.SignInWithGoogle}>
        <SignInWithGoogle />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        marginLeft: 24,
        marginRight: 24,
    },
    form: {
        marginTop: 32,
        marginBottom: 96,
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
      SignInWithGoogle: {
        marginTop: 48,
        marginBottom: 110.55
      }
})