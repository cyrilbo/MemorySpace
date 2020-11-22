import { Spaceship } from '@core/icons/Spaceship/Spaceship.component';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress?: () => void;
  size?: number;
}

export const PlayButton: FunctionComponent<Props> = ({ onPress, size }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Spaceship size={size} />
    </TouchableOpacity>
  );
};
