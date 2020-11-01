import React, { FunctionComponent } from 'react';
import { PlusIcon } from '../../icons/Plus/PlusIcon.component';
import styled from '../../theme/styled-components';
import { Shadow } from '../Shadow/Shadow.component';

const ROUND_BUTTON_DEFAULT_SIZE = 56;

interface Props {
  size?: number;
  icon?: JSX.Element;
  onPress: () => void;
}

export const RoundButton: FunctionComponent<Props> = ({
  size = ROUND_BUTTON_DEFAULT_SIZE,
  icon = <PlusIcon />,
  onPress,
}) => {
  return (
    <Shadow isDark>
      <Container size={size} onPress={onPress}>
        {icon}
      </Container>
    </Shadow>
  );
};
const Container = styled.TouchableOpacity<{ size: number }>(({ theme, size }) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: theme.colors.darkBlue,
  alignItems: 'center',
  justifyContent: 'center',
}));
