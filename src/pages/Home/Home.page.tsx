import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { AddCardForm } from '../../modules/card/components/AddCardForm/AddCardForm.component';
import { SelectTopicForm } from '../../modules/topic/components/SelectTopicForm/SelectTopicForm.component';
import { TopicList } from '../../modules/topic/components/TopicList/TopicList.component';

export const Home: FunctionComponent = () => (
  <Container>
    <Text>Home</Text>
    <SelectTopicForm />
    <TopicList />
    <AddCardForm />
  </Container>
);

const Container = styled.View({ flex: 1 });
