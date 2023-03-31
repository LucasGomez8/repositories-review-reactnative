import React from 'react'
import { FlatList, View, Text } from 'react-native'
import RepoItem from './RepoItem'
import repositories from '../repositories/repos'

export default function Repolist() {
  return (
    <FlatList
        data={repositories}
        ItemSeparatorComponent={ () => <View></View>}
        renderItem={({item: repo}) => (
            <RepoItem {...repo}></RepoItem>
  )}
    />
    )
}
