import React, { FunctionComponent, useState } from 'react';
import { Button, Text, TextInput } from 'react-native';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { TopicIcon } from '../../../../core/icons/Topic/TopicIcon.component';
import styled from '../../../../core/theme/styled-components';
import { useCreateCardMutation } from '../../data/hooks/useCreateCardMutation.hook';

interface Props {
  openSelectTopicModal: () => void;
}

export const AddCardForm: FunctionComponent<Props> = ({ openSelectTopicModal }) => {
  const { createCard } = useCreateCardMutation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [topicId, setTopicId] = useState('');

  return (
    <Container>
      <Row onPress={openSelectTopicModal}>
        <TopicIcon />
        <Text>Topic</Text>
      </Row>
      <TextInput value={question} onChangeText={setQuestion} placeholder="question" />
      <Spacer height={4} />
      <TextInput value={answer} onChangeText={setAnswer} placeholder="answer" />
      <Spacer height={4} />
      <TextInput value={topicId} onChangeText={setTopicId} placeholder="topicId" />
      <Button onPress={() => createCard({ question, answer, topicId })} title="CREATE CARD" />
    </Container>
  );
};

const Container = styled.View({ backgroundColor: '#CCCCCC' });

const Row = styled.TouchableOpacity({ flexDirection: 'row' });
