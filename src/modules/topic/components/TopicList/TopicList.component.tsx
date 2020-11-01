import React, { FunctionComponent } from 'react';
import { FlatList, Text } from 'react-native';
import { useGetTopicsQuery } from '../../data/hooks/useGetTopicsQuery.hook';
import { Topic } from '../../types/Topic.type';

export const TopicList: FunctionComponent = () => {
  const { topics } = useGetTopicsQuery();

  if (!topics) {
    return null;
  }
  return (
    <FlatList<Topic>
      data={topics}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(topic) => topic.id}
    />
  );
};
