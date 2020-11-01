import React, { FunctionComponent } from 'react';
import { FlatList, Text } from 'react-native';
import { useGetTopics } from '../../data/hooks/useGetTopics.hook';
import { Topic } from '../../types/Topic.type';

export const TopicList: FunctionComponent = () => {
  const { topics } = useGetTopics();

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
