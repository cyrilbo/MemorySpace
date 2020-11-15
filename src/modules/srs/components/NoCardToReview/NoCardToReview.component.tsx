import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { EmptyIllustation } from '../../../../core/illustrations/Empty/EmptyIllustation.component';
import styled from '../../../../core/theme/styled-components';

export const NoCardToReview: FunctionComponent = () => {
  return (
    <Container>
      <EmptyIllustation width={200} />
      <Spacer height={4} />
      <Text>You have nothing to review</Text>
    </Container>
  );
};

const Container = styled.View({ flex: 1, alignItems: 'center', justifyContent: 'center' });
