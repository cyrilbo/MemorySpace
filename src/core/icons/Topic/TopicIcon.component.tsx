import { colors } from '@core/theme/colors';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const TopicIcon: FunctionComponent<Props> = ({ color = colors.ivory, size = 20 }) => {
  return (
    <Svg width={size} height={(size * 16) / 20} viewBox="0 0 20 16" fill="none">
      <Path
        d="M18 2h-8L8 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16.77c.68 0 1.23-.56 1.23-1.23V4c0-1.1-.9-2-2-2zm0 12H2V2h5.17l2 2H18v10zm-2-6H4V6h12v2zm-4 4H4v-2h8v2z"
        fill={color}
      />
    </Svg>
  );
};
