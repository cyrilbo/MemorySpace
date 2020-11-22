import styled from '@core/theme/styled-components';
import { Topic } from '@topic/types/Topic.type';
import { getColorFromTopicColorId } from '@topic/utils/getColorFromTopicColorId.utils';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  topic: Topic;
  onPress?: () => void;
}
export const TopicListItem: FunctionComponent<Props> = ({ topic, onPress }) => (
  <TouchableOpacity onPress={onPress} disabled={!onPress}>
    <Name backgroundColor={getColorFromTopicColorId(topic.colorId)}>{topic.name}</Name>
  </TouchableOpacity>
);

const Name = styled.Text<{ backgroundColor: string }>(({ theme, backgroundColor }) => ({
  color: theme.colors.black,
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSizes.l,
  alignSelf: 'flex-start',
  backgroundColor,
  paddingHorizontal: theme.gridUnit * 2,
  paddingVertical: theme.gridUnit * 1,
  borderRadius: 10,
  overflow: 'hidden',
}));
