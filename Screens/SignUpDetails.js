import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LinedForm from '../Components/LinedShortForm'
import { StatusBar } from 'expo-status-bar'
import LinedLongInput from '../Components/LinedLongInput'
import Colors from '../utils/Colors'
import LoginBtn1 from '../Components/LoginBtn1'

export default function SignUpDetails() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <StatusBar hidden style="auto" backgroundColor='white' />
        <Text style={styles.txtContinue}>Continue sign up</Text>
        <View style={styles.flexedForm}>
      <LinedForm placeholder="First name"/>
      <LinedForm placeholder="Last name"/>
      </View>
      <View style={styles.userNameContainer}>
        <LinedLongInput placeholder="Username" password={false} />
      </View>
      <View style={styles.userNameContainer}>
        <LinedLongInput placeholder="Password" password={true} />
      </View>
      <View style={styles.userNameContainer}>
        <LinedLongInput placeholder="Confirm password" password={true} />
      </View>
      <Text style={styles.agreeContainer}>
        <Text style={styles.Agree}>By clicking Agree and continue below, 
You agree to our</Text> 
<Text style={styles.textContainer}>
<TouchableOpacity><Text style={styles.Terms}>Terms & Conditions</Text></TouchableOpacity>
</Text>
<Text style={styles.Agree}>and</Text>
<Text style={styles.textContainer}>
<TouchableOpacity><Text style={styles.Terms}> Privacy Policy.</Text></TouchableOpacity>
</Text>
      </Text>
      <View style={styles.btnContainer}>
        <LoginBtn1 txt={"Agree and continue"}/>
      </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 24,
        marginRight: 24
    },
    txtContinue: {
        fontStyle: "normal",
fontWeight: "400",
fontSize: 28,
lineHeight: 33,
textAlign: "center",
color: Colors.btnTxt1,
marginTop: 78
    },
    flexedForm: {
        display: "flex",
        flexDirection: "row",
        gap: 16,
        marginTop: 64
    },
    userNameContainer: {
        marginTop: 32
    },
    agreeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 30
    },
    Agree: {
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center'
    },
    textContainer: {
        alignSelf: 'flex-start',
        textAlignVertical: 'center',
      },
    Terms: {
        fontSize: 14,
    lineHeight: 21,
color: Colors.signUpSubTxt,
    },
    btnContainer: {
        marginTop: 32,
    }
})