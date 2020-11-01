import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import { RoundButton } from '../../core/components/RoundButton/RoundButton.component';
import styled from '../../core/theme/styled-components';
import { AddCardForm } from '../../modules/card/components/AddCardForm/AddCardForm.component';
import { SelectTopicForm } from '../../modules/topic/components/SelectTopicForm/SelectTopicForm.component';
import { TopicList } from '../../modules/topic/components/TopicList/TopicList.component';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type HomeScreenNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.Home
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const openCreateCardModal = () => navigation.navigate(RootNavigatorRouteNames.CreateCardModal);
  return (
    <Container>
      <Text>Home</Text>
      <SelectTopicForm />
      <TopicList />
      <AddCardForm />
      <AddCardButtonContainer>
        <RoundButton onPress={openCreateCardModal} />
      </AddCardButtonContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView({ flex: 1 });

const AddCardButtonContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.gridUnit * 6,
  right: theme.gridUnit * 6,
}));
