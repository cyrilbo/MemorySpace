import styled from '@core/libs/styled-components';
import React, { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  title: string;
  onPress: () => void;
}

export const BottomButton: FunctionComponent<Props> = ({ title, onPress }) => {
  const insets = useSafeAreaInsets();
  return (
    <Container onPress={onPress} paddingBottom={insets.bottom}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity<{ paddingBottom: number }>(
  ({ theme, paddingBottom }) => ({
    backgroundColor: theme.colors.secondaryElevation,
    paddingBottom: Math.max(paddingBottom, theme.gridUnit * 6),
    paddingTop: theme.gridUnit * 6,
    alignItems: 'center',
    justifyContent: 'center',
  }),
);

const Title = styled.Text(({ theme }) => ({
  color: theme.colors.primary,
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSizes.xxxl,
}));
