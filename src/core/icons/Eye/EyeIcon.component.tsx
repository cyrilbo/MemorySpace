import { colors } from '@core/theme/colors';
import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const DEFAULT_WIDTH = 64;
const DEFAULT_HEIGHT = 44;

export const EyeIcon: FunctionComponent<Props> = ({ color = colors.ivory, size = 20 }) => {
  return (
    <Svg
      width={size}
      height={(size * DEFAULT_HEIGHT) / DEFAULT_WIDTH}
      viewBox="0 0 64 44"
      fill="none"
    >
      <Path
        d="M32 5.818a28.422 28.422 0 0125.658 16c-4.8 9.804-14.633 16-25.658 16-11.026 0-20.858-6.196-25.658-16A28.422 28.422 0 0132 5.818zM32 0C17.454 0 5.033 9.047 0 21.818 5.033 34.59 17.454 43.636 32 43.636c14.545 0 26.967-9.047 32-21.818C58.967 9.048 46.545 0 32 0zm0 14.546a7.273 7.273 0 110 14.545 7.273 7.273 0 010-14.546zm0-5.819c-7.215 0-13.09 5.877-13.09 13.091 0 7.215 5.875 13.091 13.09 13.091s13.09-5.876 13.09-13.09c0-7.215-5.876-13.092-13.09-13.092z"
        fill={color}
      />
    </Svg>
  );
};
