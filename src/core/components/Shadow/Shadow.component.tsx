import { darkShadow, shadow } from '@core/theme/shadow';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  darkShadow: {
    ...darkShadow,
  },
  shadow: {
    ...shadow,
  },
});

interface Props {
  isDark?: boolean;
}

export const Shadow: FunctionComponent<Props> = ({ children, isDark = false }) => {
  return <Container style={isDark ? styles.darkShadow : styles.shadow}>{children}</Container>;
};

const Container = styled.View({
  zIndex: 1,
});
