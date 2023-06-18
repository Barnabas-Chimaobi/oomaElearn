import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors'

export default function LinedForm(props) {
  // const {width, height} = Dimensions.get("window")
  return (
    <View>
      <TextInput style={styles.input} placeholder={props.placeholder}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingBottom: 16,
    borderBottomColor: Colors.btnTxt1,
    fontWeight: "400",
fontSize: 16,
lineHeight: 24,
width: Dimensions.get("window").width*0.4
/* identical to box height */

// display: "flex",
// alignItems: "flex-end",

  }
})