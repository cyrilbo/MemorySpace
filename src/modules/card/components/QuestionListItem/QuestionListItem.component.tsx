import React, { FunctionComponent } from 'react';
import styled from '../../../../core/theme/styled-components';
import { Card } from '../../types/Card.type';

interface Props {
  card: Card;
  onPress?: () => void;
}
export const QuestionListItem: FunctionComponent<Props> = ({ card, onPress }) => (
  <Container onPress={onPress} disabled={!onPress}>
    <Name>{card.question}</Name>
  </Container>
);

const Container = styled.TouchableOpacity(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: theme.gridUnit * 2,
  paddingVertical: theme.gridUnit * 4,
  backgroundColor: theme.colors.darkGrey,
  borderRadius: 10,
}));

const Name = styled.Text(({ theme }) => ({
  color: theme.colors.ivory,
  fontWeight: 'bold',
  flex: 1,
  fontSize: 20,
}));
