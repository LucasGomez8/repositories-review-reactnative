import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View, Text } from 'react-native'
import Repolist from './Repolist'

export default function Main() {
  return (
    <View style={style.container}>  
      <Repolist></Repolist>
      <Text>Hola</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#ddd'
  }
})
