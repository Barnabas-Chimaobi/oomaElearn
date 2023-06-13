import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function FirstLoginForm(props) {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={props.onChange1}
        value={props.value1}
        placeholder={"Enter email"}
        keyboardType="email-address" 
        style={styles.textInput}
        />
        <TextInput onChangeText={props.onChange2}
        value={props.value2}
        placeholder={"Password"}
        // keyboardType="password" 
        style={styles.textInput}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 24,
        marginRight: 24,
        marginTop: 8
    },
    textInput: {
        backgroundColor: "#AEAEAE",
// opacity: 0.3,
borderRadius: 8,
paddingLeft: 16,
paddingTop: 11,
paddingBottom: 11,
fontWeight: "400",
fontSize: 14,
lineHeight: 21,
marginTop: 16,

display: "flex",
alignItems: "flex-end",

color: "black",
    }
})