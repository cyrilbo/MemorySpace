import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../theme/colors';

interface Props {
  size?: number;
  color?: string;
}

export const PlusIcon: FunctionComponent<Props> = ({ color = colors.ivory, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M25.45 11.364h-8.814V2.55c0-3.399-5.272-3.399-5.272 0v8.815H2.549c-3.399 0-3.399 5.272 0 5.272h8.815v8.815c0 3.399 5.272 3.399 5.272 0v-8.815h8.815c3.399 0 3.399-5.272 0-5.272z"
        fill={color}
      />
    </Svg>
  );
};
