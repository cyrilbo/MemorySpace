import { useCreateCardMutation } from '@card/data/hooks/useCreateCardMutation.hook';
import { useUpdateCardMutation } from '@card/data/hooks/useUpdateCardMutation.hook';
import { Card } from '@card/types/Card.type';
import { BottomButton } from '@core/components/BottomButton/BottomButton.component';
import { Spacer } from '@core/components/Spacer/Spacer.component';
import { TextInput } from '@core/components/TextInput/TextInput.component';
import { CheckIcon } from '@core/icons/Check/CheckIcon.component';
import { QuestionMarkIcon } from '@core/icons/QuestionMark/QuestionMarkIcon.component';
import { TopicIcon } from '@core/icons/Topic/TopicIcon.component';
import styled from '@core/theme/styled-components';
import { TopicListItem } from '@topic/components/TopicListItem/TopicListItem.component';
import { Topic } from '@topic/types/Topic.type';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  openSelectTopicModal: () => void;
  selectedTopic: Topic | null;
  onCardEdited: () => void;
  card?: Card;
}

export const EditCardForm: FunctionComponent<Props> = ({
  openSelectTopicModal,
  selectedTopic,
  onCardEdited,
  card,
}) => {
  const { createCard } = useCreateCardMutation(onCardEdited);
  const { updateCard } = useUpdateCardMutation(onCardEdited);

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  useEffect(() => {
    if (card) {
      setQuestion(card.question);
      setAnswer(card.answer);
    }
  }, [card]);
  const isFormValid = !!selectedTopic && question.length > 0 && answer.length > 0;

  return (
    <>
      <Container>
        <Row onPress={openSelectTopicModal}>
          <TopicIcon size={24} />
          <Spacer width={2} />
          {selectedTopic ? (
            <TopicListItem topic={selectedTopic} />
          ) : (
            <TopicPlaceholder>topic</TopicPlaceholder>
          )}
        </Row>
        <Row disabled>
          <IconContainer>
            <QuestionMarkIcon size={24} />
          </IconContainer>
          <Spacer width={2} />
          <TextInput value={question} onChangeText={setQuestion} placeholder="question" multiline />
        </Row>
        <Row disabled>
          <IconContainer>
            <CheckIcon size={24} />
          </IconContainer>
          <Spacer width={2} />
          <TextInput value={answer} onChangeText={setAnswer} placeholder="answer" multiline />
        </Row>
        <EmptySpace />
      </Container>

      {isFormValid ? (
        <BottomButton
          onPress={() => {
            if (card) {
              updateCard({ cardId: card.id, question, answer, topicId: selectedTopic.id });
            } else {
              createCard({ question, answer, topicId: selectedTopic.id });
            }
          }}
          title="SAVE"
        />
      ) : null}
    </>
  );
};

const Container = styled(KeyboardAwareScrollView)(({ theme }) => ({
  backgroundColor: theme.colors.darkGrey,
  flex: 1,
  borderTopWidth: 1,
  borderColor: theme.colors.black,
}));

const Row = styled.TouchableOpacity(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderColor: theme.colors.black,
  padding: theme.gridUnit * 4,
}));

const TopicPlaceholder = styled.Text(({ theme }) => ({
  color: theme.colors.ivory,
  opacity: 0.5,
  fontFamily: theme.fontFamilies.semiBold,
  fontSize: theme.fontSizes.l,
}));

const EmptySpace = styled.View({ flex: 1 });

const IconContainer = styled.View({
  alignSelf: 'flex-start',
  paddingTop: 2,
});
