import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import RepoItemCaption from './RepoItemCaption'
import RepoItemHeader from './RepoItemHeader'

export default function RepoItem({id, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl}) {
    
    return (
        <View id={id} style={styles.repo_container}>
        {console.log(ownerAvatarUrl)}
        <RepoItemHeader url={ownerAvatarUrl} desc={description} name={fullName} lang={language}></RepoItemHeader>
        <RepoItemCaption forks={forksCount} stars={stargazersCount} rating={ratingAverage} reviews={reviewCount}></RepoItemCaption>
    </View>
  )
}

const styles = StyleSheet.create({
    repo_container: {
        marginBottom: 30,
        backgroundColor: '#fff',
        paddingVertical: 35,
    }
})
