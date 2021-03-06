import { useDeleteCardMutation } from '@card/data/hooks/useDeleteCardMutation.hook';
import { Card } from '@card/types/Card.type';
import styled from '@core/libs/styled-components';
import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';

interface Props {
  card: Card;
  onPress?: () => void;
}
export const QuestionListItem: FunctionComponent<Props> = ({ card, onPress }) => {
  const { deleteCard } = useDeleteCardMutation();

  return (
    <Container
      onPress={onPress}
      disabled={!onPress}
      onLongPress={() =>
        Alert.alert('Deletion', 'Are you sure you want to delete this card?', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          { text: 'Yes', style: 'destructive', onPress: () => deleteCard({ cardId: card.id }) },
        ])
      }>
      <Name>{card.question}</Name>
    </Container>
  );
};

const Container = styled.TouchableOpacity(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  padding: theme.gridUnit * 4,
  backgroundColor: theme.colors.secondaryElevation,
  borderRadius: 10,
}));

const Name = styled.Text(({ theme }) => ({
  color: theme.colors.primary,
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.xl,
  flex: 1,
}));
