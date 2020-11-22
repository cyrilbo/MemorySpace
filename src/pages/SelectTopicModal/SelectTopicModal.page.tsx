import { ModalHeader } from '@core/components/ModalHeader/ModalHeader.component';
import styled from '@core/theme/styled-components';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '@navigation/RootNavigator/RootNavigator.routes';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SelectTopicForm } from '@topic/components/SelectTopicForm/SelectTopicForm.component';
import { Topic } from '@topic/types/Topic.type';
import React, { FunctionComponent } from 'react';

type SelectTopicModalNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.SelectTopicModal
>;

type SelectTopicModalRouteProp = RouteProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.SelectTopicModal
>;

type Props = {
  navigation: SelectTopicModalNavigationProp;
  route: SelectTopicModalRouteProp;
};

export const SelectTopicModal: FunctionComponent<Props> = ({ navigation }) => {
  const closeModal = (topic?: Topic) =>
    navigation.navigate(RootNavigatorRouteNames.EditCardModal, { topic });
  return (
    <Container>
      <ModalHeader title="Topic" onPressClose={() => closeModal()} />
      <SelectTopicForm onTopicSelected={(topic) => closeModal(topic)} />
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.darkGrey,
}));
