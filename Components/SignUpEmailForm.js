import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function SignUpEmailForm(props) {
  return (
    <View>
      <TextInput value={props.value1}
        placeholder={"Enter email"}
        keyboardType="email-address" 
        style={styles.textInput} />

        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnTxt}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: Colors.background,
// opacity: 0.3,
borderWidth: 1,
borderColor: Colors.borderColor1,
borderRadius: 8,
paddingLeft: 16,
paddingTop: 11,
paddingBottom: 11,
marginBottom: 70
    },
    btn: {
        backgroundColor: Colors.btnColor2,
borderRadius: 24,
borderWidth: 0.5,
borderColor: Colors.background,
paddingTop: 16,
paddingBottom: 16,
display: "flex",
flexDirection: "row",
alignItems: "center",
justifyContent: "center"
    },
    btnTxt: {
        fontStyle: "normal",
fontWeight: "500",
fontSize: 14,
lineHeight: 21,
color: Colors.btnTxt1,
    },
})