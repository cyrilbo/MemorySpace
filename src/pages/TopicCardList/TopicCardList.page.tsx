import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import styled from '../../core/theme/styled-components';
import { QuestionList } from '../../modules/card/components/QuestionList/QuestionList.component';
import { useGetCardsQuery } from '../../modules/card/data/hooks/useGetCardsQuery.hook';
import { Card } from '../../modules/card/types/Card.type';
import { usePlayButton } from '../../modules/srs/hooks/usePlayButton.hook';
import { getHexFromTopicColorId } from '../../modules/topic/utils/getHexFromTopicColorId.utils';
import { AppNavigatorRouteParamsList } from '../../navigation/AppNavigator/AppNavigator.routes';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '../../navigation/CardNavigator/CardNavigator.routes';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type TopicCardListScreenNavigationProp = CompositeNavigationProp<
  CompositeNavigationProp<
    StackNavigationProp<CardNavigatorRouteParamsList, CardNavigatorRouteNames.TopicCardList>,
    StackNavigationProp<AppNavigatorRouteParamsList>
  >,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

type TopicCardListScreenRouteProp = RouteProp<
  CardNavigatorRouteParamsList,
  CardNavigatorRouteNames.TopicCardList
>;

type Props = {
  navigation: TopicCardListScreenNavigationProp;
  route: TopicCardListScreenRouteProp;
};

export const TopicCardList: FunctionComponent<Props> = ({ route, navigation }) => {
  const openPlayCardScreen = () => navigation.navigate(CardNavigatorRouteNames.PlayCard);
  usePlayButton(navigation, openPlayCardScreen);
  const topic = route.params?.topic;
  const { cards } = useGetCardsQuery({ topicId: topic.id });
  const openEditCardPage = (card: Card) =>
    navigation.navigate(RootNavigatorRouteNames.EditCardModal, { card, topic });
  return (
    <Container backgroundColor={getHexFromTopicColorId(topic.colorId)}>
      <QuestionList cards={cards} onQuestionPress={openEditCardPage} />
    </Container>
  );
};

const Container = styled.SafeAreaView<{ backgroundColor: string }>(({ backgroundColor }) => ({
  flex: 1,
  backgroundColor,
}));
