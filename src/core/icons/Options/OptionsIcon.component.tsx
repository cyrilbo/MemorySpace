import { useTheme } from '@root/src/providers/Theme/Theme.provider';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const DEFAULT_WIDTH = 64;
const DEFAULT_HEIGHT = 16;

export const OptionsIcon: FunctionComponent<Props> = ({ color, size = 20 }) => {
  const theme = useTheme();
  return (
    <Svg
      width={size}
      height={(size * DEFAULT_HEIGHT) / DEFAULT_WIDTH}
      viewBox="0 0 64 16"
      fill="none">
      <Path
        d="M32 16A8 8 0 1032-.001 8 8 0 0032 16zM8 16A8 8 0 108-.001 8 8 0 008 16zm48 0A8 8 0 1056-.001 8 8 0 0056 16z"
        fill={color ?? theme.colors.primary}
      />
    </Svg>
  );
};
