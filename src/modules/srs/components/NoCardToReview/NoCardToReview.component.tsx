import React, { FunctionComponent } from 'react';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { SuccessIllustration } from '../../../../core/illustrations/Success/SuccessIllustration.component';
import styled from '../../../../core/theme/styled-components';

interface Props {
  topicName?: string;
}

export const NoCardToReview: FunctionComponent<Props> = ({ topicName }) => {
  return (
    <Container>
      <SuccessIllustration width={200} />
      <Spacer height={4} />
      <Title>Congratulations!</Title>
      <Spacer height={2} />
      {topicName ? (
        <SubTitle>
          You have reviewed all your daily cards for the topic <Bold>{`"${topicName}"`}</Bold>.
        </SubTitle>
      ) : (
        <SubTitle>You have reviewed all your daily cards.</SubTitle>
      )}
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.gridUnit * 4,
}));

const Title = styled.Text(({ theme }) => ({
  fontSize: 18,
  fontWeight: 'bold',
  color: theme.colors.ivory,
  textAlign: 'center',
}));
const SubTitle = styled.Text(({ theme }) => ({
  fontSize: 16,
  color: theme.colors.ivory,
  textAlign: 'center',
}));

const Bold = styled.Text({ fontWeight: 'bold' });
