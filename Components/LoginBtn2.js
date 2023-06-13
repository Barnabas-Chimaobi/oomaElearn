import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function LoginBtn2() {
  return (
    <View style={Styles.Container}>
      <TouchableOpacity style={Styles.btnContainer}>
        <Text style={Styles.btnTxt}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

const Styles = StyleSheet.create({
    Container: {
        marginLeft:24,
        marginRight: 24
    },
    btnTxt: {
        fontStyle: "normal",
fontWeight: "500",
fontSize: 14,
lineHeight: 21,
color: "#3E2056",
    },
    btnContainer: {
        display: "flex",
// flexDirection: "row",
alignItems: "center",
paddingTop: 16,
paddingBottom: 16,
gap: 10,

// width: 312px;
// height: 53px;

backgroundColor: "rgba(225, 182, 255, 0.87)",
// border: 0.5px solid #FFFFFF;
borderRadius: 24,
    }
})