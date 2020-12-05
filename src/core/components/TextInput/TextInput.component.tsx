import styled from '@core/libs/styled-components';
import React, { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';

type Props = TextInputProps;

export const TextInput: FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Input scrollEnabled={false} {...props} />
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
});

const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.primaryTransparent,
  selectionColor: theme.colors.primaryTransparent,
}))(({ theme }) => ({
  color: theme.colors.primary,
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.l,
  padding: 0,
}));
