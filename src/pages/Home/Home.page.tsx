import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { RoundButton } from '../../core/components/RoundButton/RoundButton.component';
import styled from '../../core/theme/styled-components';
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
      <AddCardButtonContainer>
        <RoundButton onPress={openCreateCardModal} />
      </AddCardButtonContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.darkGrey,
}));

const AddCardButtonContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.gridUnit * 6,
  right: theme.gridUnit * 6,
}));
