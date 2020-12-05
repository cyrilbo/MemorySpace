import React, { createContext, FunctionComponent, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native-appearance';

const DarkModeContext = createContext({
  isLight: false,
  setIsLight: (_: boolean) => {
    // do nothing
  },
});

export const DarkModeProvider: FunctionComponent = ({ children }) => {
  const colorScheme = useColorScheme();

  const [isLight, setIsLight] = useState(colorScheme === 'light');

  useEffect(() => {
    setIsLight(colorScheme === 'light');
  }, [colorScheme]);

  const defaultDarkMode = {
    isLight,
    setIsLight,
  };
  return <DarkModeContext.Provider value={defaultDarkMode}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = (): {
  isLight: boolean;
  setIsLight: (isLight: boolean) => void;
} => React.useContext(DarkModeContext);
