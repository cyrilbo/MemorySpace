import React, { FunctionComponent } from 'react';
import styled from '../../../../core/theme/styled-components';
import { Topic } from '../../types/Topic.type';
import { getHexFromTopicColorId } from '../../utils/getHexFromTopicColorId.utils';

interface Props {
  topic: Topic;
  onPress: () => void;
}
export const TopicListItem: FunctionComponent<Props> = ({ topic, onPress }) => (
  <Container backgroundColor={getHexFromTopicColorId(topic.colorId)} onPress={onPress}>
    <Name>{topic.name}</Name>
  </Container>
);

const Container = styled.TouchableOpacity<{ backgroundColor: string }>(
  ({ theme, backgroundColor }) => ({
    padding: theme.gridUnit * 2,
    backgroundColor,
  })
);

const Name = styled.Text(({ theme }) => ({ color: theme.colors.black, fontWeight: 'bold' }));
