import { topicColors } from './../constants/colors.constants';
export const getHexFromTopicColorId = (colorId: string): string => {
  return (
    topicColors.filter((topicColor) => topicColor.id === colorId)[0]?.hex || topicColors[0].hex
  );
};
