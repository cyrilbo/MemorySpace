import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { Topic } from '../../types/Topic.type';
import { TopicListItem } from '../TopicListItem/TopicListItem.component';

interface Props {
  topics: Topic[];
  NoData: JSX.Element;
  onTopicPress: (topic: Topic) => void;
}

export const TopicList: FunctionComponent<Props> = ({ onTopicPress, topics, NoData }) => {
  if (topics.length === 0) {
    return NoData;
  } else {
    return (
      <FlatList<Topic>
        data={topics}
        renderItem={({ item }) => (
          <TopicListItem key={item.id} topic={item} onPress={() => onTopicPress(item)} />
        )}
        keyExtractor={(topic) => topic.id}
      />
    );
  }
};
