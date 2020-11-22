import styled from '@core/theme/styled-components';
import { NoTopics } from '@topic/components/NoTopics/NoTopics.component';
import { WideTopicListItem } from '@topic/components/WideTopicListItem/WideTopicListItem.component';
import { Topic } from '@topic/types/Topic.type';
import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

interface Props {
  topics: Topic[];
  onTopicPress: (topic: Topic) => void;
}

export const WideTopicList: FunctionComponent<Props> = ({ onTopicPress, topics }) => {
  if (!topics || topics.length === 0) {
    return <NoTopics />;
  } else {
    return (
      <FlatList<Topic>
        data={topics}
        renderItem={({ item }) => (
          <TopicListItemContainer key={item.id}>
            <WideTopicListItem topic={item} onPress={() => onTopicPress(item)} />
          </TopicListItemContainer>
        )}
        keyExtractor={(topic) => topic.id}
      />
    );
  }
};

const TopicListItemContainer = styled.View(({ theme }) => ({
  paddingVertical: theme.gridUnit * 2,
  paddingHorizontal: theme.gridUnit * 4,
}));
