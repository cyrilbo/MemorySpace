import { borders } from './borders';
import { darkColors as colors } from './colors';
import { fontFamilies } from './fontFamilies';
import { fontSizes } from './fontSizes';
import { primaryShadow } from './shadow';

export const theme = {
  colors,
  shadow: primaryShadow,
  fontFamilies,
  fontSizes,
  borders,
  gridUnit: 4,
  dividerSize: 1,
};

export type Theme = typeof theme;
