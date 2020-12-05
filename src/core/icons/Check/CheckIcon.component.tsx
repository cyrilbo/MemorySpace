import { useTheme } from '@root/src/providers/Theme/Theme.provider';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const CheckIcon: FunctionComponent<Props> = ({ color, size = 20 }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <Path
        d="M36 64.8a28.8 28.8 0 100-57.6 28.8 28.8 0 000 57.6zm0 7.2C16.117 72 0 55.883 0 36S16.117 0 36 0s36 16.117 36 36-16.117 36-36 36zM21.6 28.8L14.4 36l18 18 25.2-25.2-7.2-7.2-18 18-10.8-10.8z"
        fill={color ?? theme.colors.primary}
      />
    </Svg>
  );
};
