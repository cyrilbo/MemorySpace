import { colors } from '@core/theme/colors';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

export const TextInput: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Input
        scrollEnabled={false}
        placeholderTextColor={colors.transparentIvory}
        selectionColor={colors.transparentIvory}
        {...props}
      />
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
});

const Input = styled.TextInput(({ theme }) => ({
  color: theme.colors.ivory,
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.l,
  padding: 0,
}));
