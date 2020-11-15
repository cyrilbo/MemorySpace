import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { RoundButton } from '../../core/components/RoundButton/RoundButton.component';
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
  const topic = route.params?.topic;
  const openPlayCardScreen = () => navigation.navigate(CardNavigatorRouteNames.PlayCard, { topic });
  usePlayButton(navigation, openPlayCardScreen);
  const { cards } = useGetCardsQuery({ topicId: topic.id });
  const openEditCardModal = (card?: Card) =>
    navigation.navigate(RootNavigatorRouteNames.EditCardModal, { card, topic });

  return (
    <Container backgroundColor={getHexFromTopicColorId(topic.colorId)}>
      <QuestionList cards={cards} onQuestionPress={openEditCardModal} />
      <AddCardButtonContainer>
        <RoundButton onPress={() => openEditCardModal()} />
      </AddCardButtonContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView<{ backgroundColor: string }>(({ backgroundColor }) => ({
  flex: 1,
  backgroundColor,
}));

const AddCardButtonContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.gridUnit * 6,
  right: theme.gridUnit * 6,
}));
