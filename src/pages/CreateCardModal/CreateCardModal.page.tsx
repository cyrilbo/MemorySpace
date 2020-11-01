import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { ModalHeader } from '../../core/components/ModalHeader/ModalHeader.component';
import styled from '../../core/theme/styled-components';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type CreateCardModalNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.CreateCardModal
>;

type Props = {
  navigation: CreateCardModalNavigationProp;
};

export const CreateCardModal: FunctionComponent<Props> = ({ navigation }) => {
  const closeModal = () => navigation.goBack();
  return (
    <Container>
      <ModalHeader title="Create a new card" onPressClose={closeModal} />
    </Container>
  );
};

const Container = styled.View``;
