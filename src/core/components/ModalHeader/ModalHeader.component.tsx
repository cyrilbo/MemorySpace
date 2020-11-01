import React, { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CrossIcon } from '../../icons/Cross/CrossIcon.component';
import styled from '../../theme/styled-components';

interface Props {
  onPressClose: () => void;
  title: string;
}

const HEADER_HEIGHT = 50;
const ICON_SIZE = 28;

export const ModalHeader: FunctionComponent<Props> = ({ onPressClose, title }) => {
  const { top } = useSafeAreaInsets();
  return (
    <Container topInset={top}>
      <IconContainer />
      <Title>{title}</Title>
      <IconContainer onPress={onPressClose}>
        <CrossIcon size={ICON_SIZE} />
      </IconContainer>
    </Container>
  );
};

const Container = styled.View<{ topInset: number }>(({ theme, topInset }) => ({
  paddingTop: topInset,
  flexDirection: 'row',
  backgroundColor: theme.colors.darkGrey,
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: theme.gridUnit * 4,
}));

const Title = styled.Text(({ theme }) => ({
  color: theme.colors.ivory,
  fontSize: 20,
  fontWeight: 'bold',
}));

const IconContainer = styled.TouchableOpacity({
  width: HEADER_HEIGHT,
  height: HEADER_HEIGHT,
  alignItems: 'flex-end',
  justifyContent: 'center',
});
