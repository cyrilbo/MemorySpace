import { colors } from '@core/theme/colors';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const CrossIcon: FunctionComponent<Props> = ({ color = colors.ivory, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path
        d="M29.96 26.233L23.728 20l6.233-6.233c2.404-2.404-1.323-6.131-3.727-3.728L20 16.272l-6.233-6.233c-2.403-2.403-6.131 1.324-3.728 3.727L16.272 20l-6.233 6.233c-2.403 2.403 1.324 6.131 3.728 3.727L20 23.727l6.233 6.234c2.404 2.403 6.131-1.324 3.728-3.728z"
        fill={color}
      />
    </Svg>
  );
};
