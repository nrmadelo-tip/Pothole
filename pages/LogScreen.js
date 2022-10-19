import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Log = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text
        onPress={() => alert('This is the "Log" screen.')}
        style={{ fontSize: 26, fontWeight: 'bold', color: 'orange' }}>Log Screen</Text>
</View>
  )
}

export default Log

const styles = StyleSheet.create({})