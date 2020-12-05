import * as React from 'react';
import { useColorScheme } from 'react-native-appearance';
import { Theme } from '.';
import { borders } from './borders';
import { darkColors, lightColors } from './colors';
import { fontFamilies } from './fontFamilies';
import { fontSizes } from './fontSizes';
import { primaryShadow } from './shadow';
import { ThemeContext, ThemeProvider as SCThemeProvider } from './styled-components';

const DarkModeContext = React.createContext({
  isLight: false,
  setIsLight: (_: boolean) => {
    // do nothing
  },
});

export const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const colorScheme = useColorScheme();

  const [isLight, setIsLight] = React.useState(colorScheme === 'light');

  React.useEffect(() => {
    setIsLight(colorScheme === 'light');
  }, [colorScheme]);

  const defaultDarkMode = {
    isLight,
    setIsLight,
  };

  return (
    <DarkModeContext.Provider value={defaultDarkMode}>
      <SCThemeProvider
        theme={{
          colors: isLight ? lightColors : darkColors,
          shadow: primaryShadow,
          fontFamilies,
          fontSizes,
          borders,
          gridUnit: 4,
          dividerSize: 1,
        }}>
        {children}
      </SCThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): {
  isLight: boolean;
  setIsLight: (isLight: boolean) => void;
} => React.useContext(DarkModeContext);

export const useTheme = (): Theme => React.useContext(ThemeContext);
