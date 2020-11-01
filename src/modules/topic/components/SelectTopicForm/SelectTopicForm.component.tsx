import React, { FunctionComponent, useState } from 'react';
import { Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useCreateTopicMutation } from '../../data/hooks/useCreateTopicMutation.hook';

export const SelectTopicForm: FunctionComponent = () => {
  const [topicName, setTopicName] = useState('');
  const { createTopic } = useCreateTopicMutation();

  return (
    <Container>
      <TextInput value={topicName} onChangeText={setTopicName} />
      <Button
        title="add"
        onPress={() => {
          createTopic(topicName);
        }}
      />
    </Container>
  );
};

const Container = styled.View``;
