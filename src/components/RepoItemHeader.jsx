import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default function RepoItemHeader(props) {
  return (
    <View style={style.header_container}>
        <Image source={{uri: props.url}} style={style.uImage}></Image>
        <View style={style.header_content}>
            <Text style={style.full_name}>{props.name}</Text>
            <Text>{props.desc}</Text>
            <Text style={style.language}>{props.lang}</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    header_container:{
        flexDirection: 'row',
    },
    header_content:{
        marginHorizontal: 10,
        flexShrink: 1
    },
    uImage:{
        flex: 0,
        height:100,
        width:100,
        marginHorizontal: 10,
        borderRadius: 10
    },
    full_name:{
        fontSize: 20,
        color: '#0A81D1'
    },
    language:{
        backgroundColor: '#314CB6',
        alignSelf: 'flex-start',
        padding: 7,
        color: '#fff',
        borderRadius: 6
    }
})
