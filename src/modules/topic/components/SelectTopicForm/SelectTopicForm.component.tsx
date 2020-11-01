import React, { FunctionComponent, useState } from 'react';
import { Button, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useCreateTopic } from '../../data/hooks/useCreateTopic.hook';

export const SelectTopicForm: FunctionComponent = () => {
  const [topicName, setTopicName] = useState('');
  const { createTopic } = useCreateTopic();

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
