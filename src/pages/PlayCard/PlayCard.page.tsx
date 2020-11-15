import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Text } from 'react-native';
import styled from '../../core/theme/styled-components';
import { AppNavigatorRouteParamsList } from '../../navigation/AppNavigator/AppNavigator.routes';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '../../navigation/CardNavigator/CardNavigator.routes';
import { RootNavigatorRouteParamsList } from '../../navigation/RootNavigator/RootNavigator.routes';

type PlayCardScreenNavigationProp = CompositeNavigationProp<
  CompositeNavigationProp<
    StackNavigationProp<CardNavigatorRouteParamsList, CardNavigatorRouteNames.PlayCard>,
    StackNavigationProp<AppNavigatorRouteParamsList>
  >,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

type PlayCardScreenRouteProp = RouteProp<
  CardNavigatorRouteParamsList,
  CardNavigatorRouteNames.PlayCard
>;

type Props = {
  navigation: PlayCardScreenNavigationProp;
  route: PlayCardScreenRouteProp;
};

export const PlayCard: FunctionComponent<Props> = () => {
  return (
    <Container>
      <Text>PlayCard</Text>
    </Container>
  );
};

const Container = styled.SafeAreaView(() => ({
  flex: 1,
}));
