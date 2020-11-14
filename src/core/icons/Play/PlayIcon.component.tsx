import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../theme/colors';

interface Props {
  size?: number;
  color?: string;
}

export const PlayIcon: FunctionComponent<Props> = ({ color = colors.ivory, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <Path
        d="M45.785 33.042l-11.367-7.58a3.555 3.555 0 00-5.53 2.965v15.157a3.555 3.555 0 005.53 2.958l11.367-7.58a3.555 3.555 0 001.162-4.636 3.566 3.566 0 00-1.162-1.284z"
        stroke={color}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M68 36a32 32 0 11-63.998 0A32 32 0 0168 36z"
        stroke={color}
        strokeWidth={7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
