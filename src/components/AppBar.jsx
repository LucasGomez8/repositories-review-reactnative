import React from 'react';
import Constants from 'expo-constants';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AppBarTab from './AppBarTab';

export default function AppBar() {
  return (
    <View style={style.appbar}>
      <ScrollView horizontal style={style.scrollerbar}>
        <AppBarTab active to={'/'}>Repositories</AppBarTab>
        <AppBarTab to={'/signin'}>Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  appbar:{
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: '#111',
    flexDirection: 'row'
  }
})