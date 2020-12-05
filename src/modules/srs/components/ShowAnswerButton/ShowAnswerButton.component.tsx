import { Spacer } from '@core/components/Spacer/Spacer.component';
import { EyeIcon } from '@core/icons/Eye/EyeIcon.component';
import styled from '@core/theme/styled-components';
import { useTheme } from '@core/theme/Theme.provider';
import React, { FunctionComponent } from 'react';

interface Props {
  onPress: () => void;
}

const ICON_SIZE = 30;

export const ShowAnswerButton: FunctionComponent<Props> = ({ onPress }) => {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <EyeIcon color={theme.colors.topicBackgroundHighlight} size={ICON_SIZE} />
      <Spacer height={2} />
      <Title>Display the answer</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity({ alignItems: 'center', justifyContent: 'center' });

const Title = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.xl,
  color: theme.colors.topicBackgroundHighlight,
}));
