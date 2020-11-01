import React, { FunctionComponent } from 'react';
import { PlusIcon } from '../../icons/Plus/PlusIcon.component';
import styled from '../../theme/styled-components';

const ROUND_BUTTON_DEFAULT_SIZE = 56;

interface Props {
  size?: number;
  icon?: JSX.Element;
}

export const RoundButton: FunctionComponent<Props> = ({
  size = ROUND_BUTTON_DEFAULT_SIZE,
  icon = <PlusIcon />,
}) => {
  return <Container size={size}>{icon}</Container>;
};
const Container = styled.View<{ size: number }>(({ theme, size }) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: theme.colors.darkBlue,
  alignItems: 'center',
  justifyContent: 'center',
}));
