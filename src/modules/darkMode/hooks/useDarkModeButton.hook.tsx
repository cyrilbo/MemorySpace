import { useDarkMode } from '@core/theme/Theme.provider';
import React, { useLayoutEffect } from 'react';
import { Switch } from 'react-native';

export const useDarkModeButton = <
  TNavigation extends {
    setOptions: (options: Record<string, unknown>) => void;
  }
>(
  navigation: TNavigation,
): void => {
  const { isLight, setIsLight } = useDarkMode();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Switch onValueChange={setIsLight} value={isLight} />,
    });
  }, [navigation, isLight, setIsLight]);
};
