import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from '../../../../core/theme/styled-components';
import { Topic } from '../../types/Topic.type';
import { getHexFromTopicColorId } from '../../utils/getHexFromTopicColorId.utils';

interface Props {
  topic: Topic;
  onPress: () => void;
}
export const TopicListItem: FunctionComponent<Props> = ({ topic, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Name backgroundColor={getHexFromTopicColorId(topic.colorId)}>{topic.name}</Name>
  </TouchableOpacity>
);

const Name = styled.Text<{ backgroundColor: string }>(({ theme, backgroundColor }) => ({
  color: theme.colors.black,
  fontWeight: 'bold',
  alignSelf: 'flex-start',
  backgroundColor,
  padding: theme.gridUnit * 2,
  borderRadius: 10,
  overflow: 'hidden',
}));
