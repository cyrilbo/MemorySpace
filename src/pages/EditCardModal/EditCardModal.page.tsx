import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ModalHeader } from '../../core/components/ModalHeader/ModalHeader.component';
import styled from '../../core/theme/styled-components';
import { EditCardForm } from '../../modules/card/components/EditCardForm/EditCardForm.component';
import { Topic } from '../../modules/topic/types/Topic.type';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type EditCardModalNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.EditCardModal
>;

type EditCardModalRouteProp = RouteProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.EditCardModal
>;

type Props = {
  navigation: EditCardModalNavigationProp;
  route: EditCardModalRouteProp;
};

export const EditCardModal: FunctionComponent<Props> = ({ navigation, route }) => {
  const closeModal = () => navigation.goBack();
  const openSelectTopicModal = () => navigation.navigate(RootNavigatorRouteNames.SelectTopicModal);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  useEffect(() => {
    if (route.params?.topic) {
      setSelectedTopic(route.params?.topic);
    }
  }, [route.params?.topic]);
  return (
    <Container>
      <ModalHeader title="Create a new card" onPressClose={closeModal} />
      <EditCardForm
        openSelectTopicModal={openSelectTopicModal}
        selectedTopic={selectedTopic}
        onCardCreated={closeModal}
      />
    </Container>
  );
};

const Container = styled.View({ flex: 1 });
