import { borders } from './borders';
import { colors } from './colors';
import { fontFamilies } from './fontFamilies';
import { fontSizes } from './fontSizes';
import { shadow } from './shadow';

export const theme = {
  colors,
  shadow,
  fontFamilies,
  fontSizes,
  borders,
  gridUnit: 4,
  dividerSize: 1,
};

export type Theme = typeof theme;
