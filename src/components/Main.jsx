import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Routes } from "react-router-native";
import Repolist from './Repolist';
import AppBar from './AppBar';
import SignIn from './SignIn';

export default function Main() {
  return (
    <View style={style.container}>
      <AppBar></AppBar>
      <Routes>
        <Route exact path='/' element={<Repolist/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    backgroundColor: '#ddd',
    flexShrink: 1,
  },
});
