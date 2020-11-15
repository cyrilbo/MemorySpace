import React, { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import { colors } from '../../theme/colors';
import styled from '../../theme/styled-components';

type Props = TextInputProps;

export const TextInput: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Input
        scrollEnabled={false}
        placeholderTextColor={colors.transparentIvory}
        selectionColor={colors.ivory}
        {...props}
      />
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const Input = styled.TextInput(({ theme }) => ({
  color: theme.colors.ivory,
  padding: 0,
}));
