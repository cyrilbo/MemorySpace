import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import styled from '../../core/theme/styled-components';
import { useGetNextCardToPlay } from '../../modules/srs/data/hooks/useGetNextCardToPlay.hook';
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

export const PlayCard: FunctionComponent<Props> = ({ route }) => {
  const topic = route.params.topic;
  const { isLoading, card } = useGetNextCardToPlay(topic.id);
  if (isLoading) {
    return <ActivityIndicator />;
  } else if (card) {
    return (
      <Container>
        <Text>{card.question}</Text>
        <Text>{card.answer}</Text>
      </Container>
    );
  } else {
    return <Text>no card to review</Text>;
  }
};

const Container = styled.SafeAreaView(() => ({
  flex: 1,
}));
