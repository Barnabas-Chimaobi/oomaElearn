import { View, Text, Dimensions } from 'react-native'
import React from 'react'

export default function ScreenDimensions() {
    const {width, height} = Dimensions.get("window")
  return (
    <View>
      <Text>ScreenDimensions</Text>
    </View>
  )
}