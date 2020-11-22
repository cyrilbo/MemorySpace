import { topicColors } from '@topic/constants/colors.constants';
import { TopicColor } from '@topic/types/TopicColor.type';

export const getRandomTopicColor = (): TopicColor => {
  const index = Math.floor(Math.random() * topicColors.length);
  return topicColors[index];
};
