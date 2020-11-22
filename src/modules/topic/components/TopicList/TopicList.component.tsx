import { Spacer } from '@core/components/Spacer/Spacer.component';
import styled from '@core/theme/styled-components';
import { TopicListItem } from '@topic/components/TopicListItem/TopicListItem.component';
import { Topic } from '@topic/types/Topic.type';
import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

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
      <>
        <Spacer height={2} />
        <FlatList<Topic>
          data={topics}
          renderItem={({ item }) => (
            <TopicListItemContainer key={item.id}>
              <TopicListItem topic={item} onPress={() => onTopicPress(item)} />
            </TopicListItemContainer>
          )}
          keyExtractor={(topic) => topic.id}
        />
      </>
    );
  }
};

const TopicListItemContainer = styled.View(({ theme }) => ({
  paddingVertical: theme.gridUnit * 2,
  paddingHorizontal: theme.gridUnit * 4,
}));
