import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../theme/colors';

interface Props {
  size?: number;
  color?: string;
}

const DEFAULT_HEIGHT = 65;
const DEFAULT_WIDTH = 34;

export const OutlinedRightArrowIcon: FunctionComponent<Props> = ({
  color = colors.ivory,
  size = 20,
}) => {
  return (
    <Svg
      width={(size * DEFAULT_HEIGHT) / DEFAULT_WIDTH}
      height={DEFAULT_HEIGHT}
      viewBox="0 0 34 65"
      fill="none"
    >
      <Path
        d="M5.568 64.963a4.561 4.561 0 01-3.513-7.481L22.49 33.033 2.785 8.54a4.561 4.561 0 01.684-6.431 4.561 4.561 0 016.66.684L32.16 30.16a4.561 4.561 0 010 5.793L9.354 63.32a4.561 4.561 0 01-3.786 1.643z"
        fill={color}
      />
    </Svg>
  );
};
