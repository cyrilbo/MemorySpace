import React, { FunctionComponent, useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useGetTopics } from '../../hooks/useGetTopics.hook';
import { Topic } from '../../types/Topic.type';

export const TopicList: FunctionComponent = () => {
  const { getTopics } = useGetTopics();
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    getTopics().then(setTopics);
  }, [getTopics]);

  if (!topics || topics.length === 0) {
    return null;
  }
  return <FlatList<Topic> data={topics} renderItem={({ item }) => <Text>{item.name}</Text>} />;
};
