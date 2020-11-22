import React, { FunctionComponent, useState } from 'react';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { EyeIcon } from '../../../../core/icons/Eye/EyeIcon.component';
import { colors } from '../../../../core/theme/colors';
import styled from '../../../../core/theme/styled-components';
import { useSubmitCardReviewMutation } from '../../../card/data/hooks/useSubmitCardReviewMutation.hook';
import { Card } from '../../../card/types/Card.type';
import { ResultForm } from '../ResultForm/ResultForm.component';

interface Props {
  card: Card;
}

export const CardReviewForm: FunctionComponent<Props> = ({ card }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { submitCardReview } = useSubmitCardReviewMutation(() => setIsAnswerVisible(false));
  return (
    <Container>
      <QuestionContainer>
        <Question>{card.question}</Question>
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
        <EyeIconContainer
          onPress={() => {
            setIsAnswerVisible(!isAnswerVisible);
          }}
        >
          <EyeIcon color={colors.black} size={30} />
        </EyeIconContainer>
      )}
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  paddingVertical: theme.gridUnit * 5,
}));

const QuestionContainer = styled.View(({ theme }) => ({
  justifyContent: 'center',
  borderTopWidth: 4,
  borderBottomWidth: 4,
  padding: theme.gridUnit * 5,
}));

const Question = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.bold,
  fontSize: theme.fontSizes.xxxl,
}));

const AnswerContainer = styled.ScrollView(({ theme }) => ({
  flex: 1,
  padding: theme.gridUnit * 5,
}));

const Answer = styled.Text(({ theme }) => ({
  fontFamily: theme.fontFamilies.regular,
  fontSize: theme.fontSizes.xl,
}));

const EyeIconContainer = styled.TouchableOpacity({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
