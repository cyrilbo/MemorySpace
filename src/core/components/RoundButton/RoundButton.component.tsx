import { Shadow } from '@core/components/Shadow/Shadow.component';
import { PlusIcon } from '@core/icons/Plus/PlusIcon.component';
import styled from '@core/libs/styled-components';
import React, { FunctionComponent } from 'react';

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
  backgroundColor: theme.colors.black,
  alignItems: 'center',
  justifyContent: 'center',
}));
