import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import styled from '../../../../core/theme/styled-components';
import { Topic } from '../../types/Topic.type';
import { WideTopicListItem } from '../WideTopicListItem/WideTopicListItem.component';

interface Props {
  topics: Topic[];
  onTopicPress: (topic: Topic) => void;
}

export const WideTopicList: FunctionComponent<Props> = ({ onTopicPress, topics }) => {
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
};

const TopicListItemContainer = styled.View(({ theme }) => ({
  paddingVertical: theme.gridUnit * 2,
  paddingHorizontal: theme.gridUnit * 4,
}));
