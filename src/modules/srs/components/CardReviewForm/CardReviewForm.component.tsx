import { useSubmitCardReviewMutation } from '@card/data/hooks/useSubmitCardReviewMutation.hook';
import { Card } from '@card/types/Card.type';
import { Spacer } from '@core/components/Spacer/Spacer.component';
import styled from '@core/theme/styled-components';
import { Box } from '@root/src/core/components/Box/Box.component';
import { ResultForm } from '@srs/components/ResultForm/ResultForm.component';
import React, { FunctionComponent, useState } from 'react';
import { ShowAnswerButton } from '../ShowAnswerButton/ShowAnswerButton.component';

interface Props {
  card: Card;
}

export const CardReviewForm: FunctionComponent<Props> = ({ card }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { submitCardReview } = useSubmitCardReviewMutation(() => setIsAnswerVisible(false));
  return (
    <Container>
      <QuestionContainer>
        <Box title={'Question'}>
          <Question>{card.question}</Question>
        </Box>
      </QuestionContainer>
      {isAnswerVisible ? (
        <>
          <AnswerContainer>
            <Answer>{card.answer}</Answer>
          </AnswerContainer>
          <ResultForm
            onFailurePress={() => {
              submitCardReview({ cardId: card.id, isCardWellKnown: false });
            }}
            onSuccessPress={() => {
              submitCardReview({ cardId: card.id, isCardWellKnown: true });
            }}
          />
          <Spacer height={10} />
        </>
      ) : (
        <ShowAnswerButtonContainer>
          <ShowAnswerButton onPress={() => setIsAnswerVisible(true)} />
        </ShowAnswerButtonContainer>
      )}
    </Container>
  );
};

const Container = styled.ScrollView.attrs(({ theme }) => ({
  contentContainerStyle: {
    flex: 1,
    paddingVertical: theme.gridUnit * 5,
  },
}))``;

const QuestionContainer = styled.View(({ theme }) => ({
  padding: theme.gridUnit * 5,
}));

const Question = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSizes.xxxl,
}));

const AnswerContainer = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.gridUnit * 5,
}));

const Answer = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.regular,
  fontSize: theme.fontSizes.xl,
}));

const ShowAnswerButtonContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
