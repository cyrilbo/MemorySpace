import { Spacer } from '@core/components/Spacer/Spacer.component';
import { EmptyIllustation } from '@core/illustrations/Empty/EmptyIllustation.component';
import styled from '@core/theme/styled-components';
import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';

interface Props {
  title: string;
}

const ILLUSTRATION_WIDTH = 200;

export const EmptyList: FunctionComponent<Props> = ({ title }) => {
  return (
    <Container>
      <EmptyIllustation width={ILLUSTRATION_WIDTH} />
      <Spacer height={4} />
      <Text>{title}</Text>
    </Container>
  );
};

const Container = styled.View({ flex: 1, alignItems: 'center', justifyContent: 'center' });
