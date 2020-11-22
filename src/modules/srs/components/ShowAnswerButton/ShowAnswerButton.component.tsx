import { Spacer } from '@core/components/Spacer/Spacer.component';
import { EyeIcon } from '@core/icons/Eye/EyeIcon.component';
import { colors } from '@core/theme/colors';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';

interface Props {
  onPress: () => void;
}

const ICON_SIZE = 30;

export const ShowAnswerButton: FunctionComponent<Props> = ({ onPress }) => {
  return (
    <Container onPress={onPress}>
      <EyeIcon color={colors.black} size={ICON_SIZE} />
      <Spacer height={2} />
      <Title>Display the answer</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity({ alignItems: 'center', justifyContent: 'center' });

const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.xl,
}));
