import React, { FunctionComponent, useState } from 'react';
import { Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Spacer } from '../../../../core/components/Spacer/Spacer.component';
import { useCreateCardMutation } from '../../data/hooks/useCreateCardMutation.hook';

export const AddCardForm: FunctionComponent = () => {
  const { createCard } = useCreateCardMutation();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [topicId, setTopicId] = useState('');

  return (
    <Container>
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
