import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { EmptyIllustation } from '../../illustrations/Empty/EmptyIllustation.component';
import styled from '../../theme/styled-components';
import { Spacer } from '../Spacer/Spacer.component';

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
