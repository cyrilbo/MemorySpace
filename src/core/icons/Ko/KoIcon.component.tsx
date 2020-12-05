import { useTheme } from '@root/src/providers/Theme/Theme.provider';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const KoIcon: FunctionComponent<Props> = ({ color, size = 20 }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <Path
        d="M32 0C14.355 0 0 14.355 0 32s14.355 32 32 32 32-14.355 32-32S49.645 0 32 0zm16 38.4H16V25.6h32v12.8z"
        fill={color ?? theme.colors.primary}
      />
    </Svg>
  );
};
