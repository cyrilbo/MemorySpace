import { topicColors } from '@topic/constants/colors.constants';
export const getColorFromTopicColorId = (colorId: string): string => {
  return (
    topicColors.filter((topicColor) => topicColor.id === colorId)[0]?.hex || topicColors[0].hex
  );
};
