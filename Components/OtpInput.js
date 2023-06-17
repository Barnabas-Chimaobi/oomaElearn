import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'
import LoginBtn1 from './LoginBtn1'

export default function OtpInput() {
  return (
    <View>
      {/* OTP box begins */}
      <View style={styles.otpContainer}></View>
      {/* OTP Box ends */}

      <View style={styles.btnContainer}>
        {/* <TouchableOpacity style={styles.btnMain}>
            <Text style={styles.btnTxt}>Verify</Text>
        </TouchableOpacity> */}
        <LoginBtn1 txt={"Verify"} />
      </View>
      <TouchableOpacity style={styles.resendContainer}>
        <Text style={styles.resendText}>Resend code</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {},
    otpContainer: {
        marginTop:64
    },
    btnContainer: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 60
    },
    btnMain: {
        backgroundColor: Colors.btnColor2,
borderWidth: 0.5,
borderColor: Colors.background,
borderRadius: 24,
display: "flex",
flexDirection: "row",
alignItems: "center",
justifyContent: "center",
paddingTop: 16,
paddingBottom: 16
// gap: 10px;
    },
    btnTxt: {
        fontStyle: "normal",
fontWeight: "500",
fontSize: 14,
lineHeight: 21,
color: Colors.btnTxt1,
    },
    resendText: {
        fontStyle: "normal",
fontWeight: "500",
fontSize: 14,
lineHeight: 21,
color: Colors.signUpSubTxt,
textAlign: "center"
    },
    resendContainer: {
        marginTop: 32
    }
})