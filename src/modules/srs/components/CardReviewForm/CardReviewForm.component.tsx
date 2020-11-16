import { BlurView } from '@react-native-community/blur';
import React, { FunctionComponent, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { EyeIcon } from '../../../../core/icons/Eye/EyeIcon.component';
import { theme } from '../../../../core/theme';
import { colors } from '../../../../core/theme/colors';
import styled from '../../../../core/theme/styled-components';
import { useSubmitCardReviewMutation } from '../../../card/data/hooks/useSubmitCardReviewMutation.hook';
import { Card } from '../../../card/types/Card.type';
import { getHexFromTopicColorId } from '../../../topic/utils/getHexFromTopicColorId.utils';
import { ResultForm } from '../ResultForm/ResultForm.component';

interface Props {
  card: Card;
}

const MARGIN_BOTTOM = 4;

export const CardReviewForm: FunctionComponent<Props> = ({ card }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { submitCardReview } = useSubmitCardReviewMutation(() => setIsAnswerVisible(false));
  const insets = useSafeAreaInsets();

  return (
    <Container>
      <QuestionContainer>
        <Question>{card.question}</Question>
      </QuestionContainer>
      <AnswerContainer>
        <Answer>{card.answer}</Answer>
      </AnswerContainer>

      {isAnswerVisible ? (
        <ResultFormContainer marginBottom={insets.bottom + MARGIN_BOTTOM * theme.gridUnit}>
          <ResultForm
            onFailurePress={() => {
              submitCardReview({ cardId: card.id, isCardWellKnown: false });
            }}
            onSuccessPress={() => {
              submitCardReview({ cardId: card.id, isCardWellKnown: true });
            }}
          />
        </ResultFormContainer>
      ) : null}
      <Spacer height={insets.bottom / theme.dividerSize + MARGIN_BOTTOM} />
      {!isAnswerVisible ? (
        <Blur
          blurType="light"
          blurAmount={2}
          reducedTransparencyFallbackColor={getHexFromTopicColorId(card.topic.colorId)}
        >
          <EyeIconContainer
            onPress={() => {
              setIsAnswerVisible(!isAnswerVisible);
            }}
          >
            <EyeIcon color={colors.black} size={30} />
          </EyeIconContainer>
        </Blur>
      ) : null}
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  paddingHorizontal: theme.gridUnit * 4,
});

const QuestionContainer = styled.View({ flex: 1, justifyContent: 'center', zIndex: 10 });

const Question = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});

const AnswerContainer = styled.ScrollView({ flex: 1 });
const Answer = styled.Text({});

const Blur = styled(BlurView)({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const EyeIconContainer = styled.TouchableOpacity({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});

const ResultFormContainer = styled.View<{ marginBottom: number }>(({ marginBottom }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: marginBottom,
}));
