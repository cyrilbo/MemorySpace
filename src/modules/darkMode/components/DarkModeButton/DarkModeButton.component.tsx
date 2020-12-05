import { DarkModeIcon } from '@core/icons/DarkMode/DarkModeIcon.component';
import { useDarkMode } from '@providers/DarkMode/DarkMode.provider';
import { useTheme } from '@providers/Theme/Theme.provider';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

export const DarkModeButton: FunctionComponent = () => {
  const { isLight, setIsLight } = useDarkMode();
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        setIsLight(!isLight);
      }}>
      <DarkModeIcon color={theme.colors.primary} />
    </TouchableOpacity>
  );
};
