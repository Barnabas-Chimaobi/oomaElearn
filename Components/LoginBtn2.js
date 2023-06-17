import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function LoginBtn2(props) {
  return (
    <View style={Styles.Container}>
      <TouchableOpacity style={Styles.btnContainer}>
        <Text style={Styles.btnTxt}>{props.txt}</Text>
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
color: Colors.btnTxt1,
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

backgroundColor: Colors.btnColor1,
// border: 0.5px solid #FFFFFF;
borderRadius: 24,
    }
})