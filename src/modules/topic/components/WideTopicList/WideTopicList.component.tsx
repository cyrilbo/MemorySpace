import styled from '@core/libs/styled-components';
import { NoTopics } from '@topic/components/NoTopics/NoTopics.component';
import { WideTopicListItem } from '@topic/components/WideTopicListItem/WideTopicListItem.component';
import { Topic } from '@topic/types/Topic.type';
import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

interface Props {
  topics: Topic[];
  onTopicPress: (topic: Topic) => void;
}

const VERTICAL_CONTENT_LIST_PADDING_TOP = 12;
const VERTICAL_CONTENT_LIST_PADDING_BOTTOM = 100;

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
        contentContainerStyle={{
          paddingTop: VERTICAL_CONTENT_LIST_PADDING_TOP,
          paddingBottom: VERTICAL_CONTENT_LIST_PADDING_BOTTOM,
        }}
      />
    );
  }
};

const TopicListItemContainer = styled.View(({ theme }) => ({
  paddingVertical: theme.gridUnit * 2,
  paddingHorizontal: theme.gridUnit * 4,
}));
