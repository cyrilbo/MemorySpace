import React, { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styled from '../../theme/styled-components';

interface Props {
  title: string;
  onPress: () => void;
}

export const BottomButton: FunctionComponent<Props> = ({ title, onPress }) => {
  const insets = useSafeAreaInsets();
  return (
    <Container onPress={onPress} bottom={insets.bottom}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ bottom: number }>(({ theme, bottom }) => ({
  backgroundColor: theme.colors.black,
  paddingBottom: Math.max(bottom, theme.gridUnit * 6),
  paddingTop: theme.gridUnit * 6,
  alignItems: 'center',
  justifyContent: 'center',
}));

const Title = styled.Text(({ theme }) => ({ color: theme.colors.ivory, fontWeight: 'bold' }));
