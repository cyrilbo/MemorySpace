import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import styled from '../../../../core/theme/styled-components';
import { Card } from '../../types/Card.type';
import { QuestionListItem } from '../QuestionListItem/QuestionListItem.component';

interface Props {
  cards: Card[];
  onQuestionPress: (card: Card) => void;
}

export const QuestionList: FunctionComponent<Props> = ({ onQuestionPress, cards }) => {
  return (
    <FlatList<Card>
      data={cards}
      renderItem={({ item }) => (
        <TopicListItemContainer key={item.id}>
          <QuestionListItem card={item} onPress={() => onQuestionPress(item)} />
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
