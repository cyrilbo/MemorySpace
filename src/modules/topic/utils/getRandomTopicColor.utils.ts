import { topicColors } from '../constants/colors.constants';
import { TopicColor } from '../types/TopicColor.type';

export const getRandomTopicColor = (): TopicColor => {
  const index = Math.floor(Math.random() * topicColors.length);
  return topicColors[index];
};
