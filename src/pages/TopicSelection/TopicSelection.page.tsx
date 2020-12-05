import { useCloseModalButton } from '@core/hooks/useCloseModalButton.hook';
import styled from '@core/theme/styled-components';
import { RootNavigatorRouteNames } from '@navigation/RootNavigator/RootNavigator.routes';
import { SelectTopicForm } from '@topic/components/SelectTopicForm/SelectTopicForm.component';
import { Topic } from '@topic/types/Topic.type';
import React, { FunctionComponent } from 'react';
import { TopicSelectionProps } from './TopicSelection.interface';

export const TopicSelection: FunctionComponent<TopicSelectionProps> = ({ navigation }) => {
  const closeModal = (topic?: Topic) =>
    navigation.navigate(RootNavigatorRouteNames.CardEdition, { topic });
  useCloseModalButton(navigation, closeModal);

  return (
    <Container>
      <SelectTopicForm onTopicSelected={(topic) => closeModal(topic)} />
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.secondary,
}));
