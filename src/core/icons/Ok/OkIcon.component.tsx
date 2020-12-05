import { useTheme } from '@core/theme/Theme.provider';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const OkIcon: FunctionComponent<Props> = ({ color, size = 20 }) => {
  const theme = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <Path
        d="M32 0C14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0zm13.73 14.988l6.649 6.649-20.766 20.77-6.61 6.605-6.648-6.649-6.734-6.738 6.606-6.605 6.734 6.738 20.77-20.77z"
        fill={color ?? theme.colors.primary}
      />
    </Svg>
  );
};
