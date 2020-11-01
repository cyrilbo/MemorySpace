import { colors } from './colors';
import { shadow } from './shadow';

export const theme = {
  colors,
  shadow,
  gridUnit: 4,
  dividerSize: 1,
};

export type Theme = typeof theme;
