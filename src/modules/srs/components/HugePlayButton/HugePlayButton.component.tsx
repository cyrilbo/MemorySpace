import { Spacer } from '@core/components/Spacer/Spacer.component';
import { Spaceship } from '@core/icons/Spaceship/Spaceship.component';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';

interface Props {
  onPress?: () => void;
}

export const HugePlayButton: FunctionComponent<Props> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>Review</Title>
      <Spacer width={2} />
      <Spaceship size={40} />
    </Container>
  );
};

const Container = styled.TouchableOpacity(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.raisinBlack,
  padding: theme.gridUnit * 2,
  borderRadius: 10,
}));

const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.bold,
  fontSize: 26,
  color: theme.colors.ivory,
}));
