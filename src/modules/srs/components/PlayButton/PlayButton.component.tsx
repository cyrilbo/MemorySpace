import { PlayIcon } from '@core/icons/Play/PlayIcon.component';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress?: () => void;
  color?: string;
  size?: number;
}

export const PlayButton: FunctionComponent<Props> = ({ onPress, color, size }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <PlayIcon color={color} size={size} />
    </TouchableOpacity>
  );
};
