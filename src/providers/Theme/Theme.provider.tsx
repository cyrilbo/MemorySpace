import { useDarkMode } from '@providers/DarkMode/DarkMode.provider';
import * as React from 'react';
import { ThemeContext, ThemeProvider as SCThemeProvider } from '../../core/libs/styled-components';
import { borders } from './borders';
import { darkColors, lightColors } from './colors';
import { fontFamilies } from './fontFamilies';
import { fontSizes } from './fontSizes';
import { primaryShadow } from './shadow';

const defaultTheme = {
  colors: darkColors,
  shadow: primaryShadow,
  fontFamilies,
  fontSizes,
  borders,
  gridUnit: 4,
  dividerSize: 1,
};

export type Theme = typeof defaultTheme;

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const { isLight } = useDarkMode();
  return (
    <SCThemeProvider theme={{ ...defaultTheme, colors: isLight ? lightColors : darkColors }}>
      {children}
    </SCThemeProvider>
  );
};

export const useTheme = (): Theme => React.useContext(ThemeContext);
