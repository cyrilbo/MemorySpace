import { colors } from '@core/theme/colors';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export const QuestionMarkIcon: FunctionComponent<Props> = ({ color = colors.ivory, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 72 72" fill="none">
      <Path
        d="M36 45.6v-3.2c0-3.2 0-4.8 3.2-6.4 3.2-1.6 6.4-3.2 6.4-8 0-3.2-3.2-8-9.6-8-6.4 0-9.6 4.045-9.6 9.6M36 48.8v6.4M36 68c17.674 0 32-14.326 32-32S53.674 4 36 4 4 18.326 4 36s14.326 32 32 32z"
        stroke={color}
        strokeWidth={7}
      />
    </Svg>
  );
};
