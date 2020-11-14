import React, { FunctionComponent, useState } from 'react';
import { BottomButton } from '../../../../core/components/BottomButton/BottomButton.component';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { TextInput } from '../../../../core/components/TextInput/TextInput.component';
import { CheckIcon } from '../../../../core/icons/Check/CheckIcon.component';
import { QuestionMarkIcon } from '../../../../core/icons/QuestionMark/QuestionMarkIcon.component';
import { TopicIcon } from '../../../../core/icons/Topic/TopicIcon.component';
import styled from '../../../../core/theme/styled-components';
import { TopicListItem } from '../../../topic/components/TopicListItem/TopicListItem.component';
import { Topic } from '../../../topic/types/Topic.type';
import { useCreateCardMutation } from '../../data/hooks/useCreateCardMutation.hook';

interface Props {
  openSelectTopicModal: () => void;
  selectedTopic: Topic | null;
  onCardCreated: () => void;
}

export const AddCardForm: FunctionComponent<Props> = ({
  openSelectTopicModal,
  selectedTopic,
  onCardCreated,
}) => {
  const { createCard } = useCreateCardMutation(onCardCreated);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const isFormValid = !!selectedTopic && question.length > 0 && answer.length > 0;

  return (
    <Container>
      <Row onPress={openSelectTopicModal}>
        <TopicIcon size={24} />
        <Spacer width={2} />
        {selectedTopic ? (
          <TopicListItem topic={selectedTopic} />
        ) : (
          <TopicPlaceholder>...</TopicPlaceholder>
        )}
      </Row>
      <Row disabled>
        <QuestionMarkIcon size={24} />
        <Spacer width={2} />
        <TextInput value={question} onChangeText={setQuestion} placeholder="question" />
      </Row>
      <Row disabled>
        <CheckIcon size={24} />
        <Spacer width={2} />
        <TextInput value={answer} onChangeText={setAnswer} placeholder="answer" multiline />
      </Row>
      <EmptySpace />

      {isFormValid ? (
        <BottomButton
          onPress={() => createCard({ question, answer, topicId: selectedTopic.id })}
          title="CREATE CARD"
        />
      ) : null}
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
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

const TopicPlaceholder = styled.Text(({ theme }) => ({ color: theme.colors.ivory }));

const EmptySpace = styled.View({ flex: 1 });
