import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../../core/theme/colors';
import styled from '../../core/theme/styled-components';
import { CardReviewForm } from '../../modules/srs/components/CardReviewForm/CardReviewForm.component';
import { NoCardToReview } from '../../modules/srs/components/NoCardToReview/NoCardToReview.component';
import { useGetNextCardToPlay } from '../../modules/srs/data/hooks/useGetNextCardToPlay.hook';
import { Topic } from '../../modules/topic/types/Topic.type';
import { getColorFromTopicColorId } from '../../modules/topic/utils/getColorFromTopicColorId.utils';
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

export const PlayCard: FunctionComponent<Props> = ({ route, navigation }) => {
  const topic: Topic | undefined = route.params?.topic;
  const { isLoading, card } = useGetNextCardToPlay(topic?.id);
  useLayoutEffect(() => {
    if (card?.topic?.name) {
      navigation.setOptions({
        headerTitle: card.topic.name,
      });
    } else {
      navigation.setOptions({
        headerTitle: 'Review',
      });
    }
  }, [navigation, card?.topic?.name]);
  if (isLoading) {
    return <ActivityIndicator />;
  } else if (card) {
    return (
      <Container backgroundColor={getColorFromTopicColorId(card.topic.colorId)}>
        <CardReviewForm card={card} />
      </Container>
    );
  } else {
    return (
      <Container backgroundColor={colors.darkGrey}>
        <NoCardToReview topicName={topic?.name} />
      </Container>
    );
  }
};

const Container = styled.View<{ backgroundColor: string }>(({ backgroundColor }) => ({
  flex: 1,
  backgroundColor,
}));
