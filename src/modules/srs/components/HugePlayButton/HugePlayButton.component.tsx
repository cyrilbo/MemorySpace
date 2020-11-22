import { Spacer } from '@core/components/Spacer/Spacer.component';
import { Spaceship } from '@core/icons/Spaceship/Spaceship.component';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';

interface Props {
  onPress?: () => void;
  size?: number;
}

export const HugePlayButton: FunctionComponent<Props> = ({ onPress, size }) => {
  return (
    <Container onPress={onPress}>
      <Title>Play</Title>
      <Spacer width={2} />
      <Spaceship size={size} />
    </Container>
  );
};

const Container = styled.TouchableOpacity(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.colors.black,
  padding: theme.gridUnit * 3,
  borderRadius: 20,
}));

const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.extraBold,
  fontSize: 36,
  color: theme.colors.ivory,
}));
