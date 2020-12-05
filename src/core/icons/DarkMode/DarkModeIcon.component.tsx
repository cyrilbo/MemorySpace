import { useTheme } from '@root/src/providers/Theme/Theme.provider';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const DarkModeIcon: FunctionComponent<Props> = ({ color, size = 20 }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <Path d="M32 44.8a12.8 12.8 0 000-25.6v25.6z" fill={color ?? theme.colors.primary} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 0C14.326 0 0 14.326 0 32s14.326 32 32 32 32-14.326 32-32S49.674 0 32 0zm0 6.4v12.8a12.8 12.8 0 000 25.6v12.8a25.6 25.6 0 100-51.2z"
        fill={color ?? theme.colors.primary}
      />
    </Svg>
  );
};
