import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import LinedForm from '../Components/LinedShortForm'
import { StatusBar } from 'expo-status-bar'

export default function SignUpDetails() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <StatusBar hidden style="auto" backgroundColor='white' />
        <View style={styles.flexedForm}>
      <LinedForm placeholder="First name"/>
      <LinedForm placeholder="First name"/>
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
    flexedForm: {
        display: "flex",
        flexDirection: "row",
        gap: 16,
    }
})