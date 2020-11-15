import React, { FunctionComponent } from 'react';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { EmptyIllustation } from '../../../../core/illustrations/Empty/EmptyIllustation.component';
import styled from '../../../../core/theme/styled-components';

export const NoTopics: FunctionComponent = () => {
  return (
    <Container>
      <EmptyIllustation width={200} />
      <Spacer height={4} />
      <Title>No topics found</Title>
    </Container>
  );
};

const Container = styled.View({ flex: 1, alignItems: 'center', justifyContent: 'center' });

const Title = styled.Text(({ theme }) => ({
  color: theme.colors.ivory,
}));
