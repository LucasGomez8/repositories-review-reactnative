import React, { useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import RepoItem from './RepoItem';
import UseRepositories from '../hook/UseRepositories';

export default function Repolist() {

  const { repoData } = UseRepositories();
  

  const listData = repoData ?
  repoData.edges.map( item => item.node) : [];

  return (
    <FlatList
      data={listData}
      ItemSeparatorComponent={() => <View />}
      renderItem={({ item: repo }) => (
        <RepoItem {...repo} />
      )}
    />
  );
}
