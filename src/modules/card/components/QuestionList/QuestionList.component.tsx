import { QuestionListItem } from '@card/components/QuestionListItem/QuestionListItem.component';
import { Card } from '@card/types/Card.type';
import { EmptyList } from '@core/components/EmptyList/EmptyList.component';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

interface Props {
  cards: Card[];
  onQuestionPress: (card: Card) => void;
}

export const QuestionList: FunctionComponent<Props> = ({ onQuestionPress, cards }) => {
  if (!cards || cards.length === 0) {
    return <EmptyList title={'You have no cards for this topic yet.'} />;
  } else {
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
  }
};

const TopicListItemContainer = styled.View(({ theme }) => ({
  paddingVertical: theme.gridUnit * 2,
  paddingHorizontal: theme.gridUnit * 4,
}));
