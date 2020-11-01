import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { ModalHeader } from '../../core/components/ModalHeader/ModalHeader.component';
import styled from '../../core/theme/styled-components';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type SelectTopicModalNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.SelectTopicModal
>;

type Props = {
  navigation: SelectTopicModalNavigationProp;
};

export const SelectTopicModal: FunctionComponent<Props> = ({ navigation }) => {
  const closeModal = () => navigation.goBack();
  return (
    <Container>
      <ModalHeader title="Topic" onPressClose={closeModal} />
    </Container>
  );
};

const Container = styled.View``;
