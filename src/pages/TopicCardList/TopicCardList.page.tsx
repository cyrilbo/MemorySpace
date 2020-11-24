import { QuestionList } from '@card/components/QuestionList/QuestionList.component';
import { useGetCardsQuery } from '@card/data/hooks/useGetCardsQuery.hook';
import { useOpenEditCardModalButton } from '@card/hooks/useEditCardModalButton.hook';
import styled from '@core/theme/styled-components';
import { AppNavigatorRouteParamsList } from '@navigation/AppNavigator/AppNavigator.routes';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '@navigation/CardNavigator/CardNavigator.routes';
import { RootNavigatorRouteParamsList } from '@navigation/RootNavigator/RootNavigator.routes';
import { useTopicCardListNavigation } from '@pages/TopicCardList/TopicCardList.hooks';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HugePlayButton } from '@srs/components/HugePlayButton/HugePlayButton.component';
import { getColorFromTopicColorId } from '@topic/utils/getColorFromTopicColorId.utils';
import React, { FunctionComponent } from 'react';

export type TopicCardListScreenNavigationProp = CompositeNavigationProp<
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
  const { cards } = useGetCardsQuery({ topicId: topic.id });
  const { openEditCardModal, openPlayCardScreen } = useTopicCardListNavigation(navigation, topic);
  useOpenEditCardModalButton(navigation, openEditCardModal);
  return (
    <Container backgroundColor={getColorFromTopicColorId(topic.colorId)}>
      <QuestionList cards={cards} onQuestionPress={openEditCardModal} />
      <PlayButtonContainer>
        <HugePlayButton onPress={openPlayCardScreen} />
      </PlayButtonContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView<{ backgroundColor: string }>(({ backgroundColor }) => ({
  flex: 1,
  backgroundColor,
}));

const PlayButtonContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  alignItems: 'center',
  bottom: theme.gridUnit * 6,
  right: 0,
  left: 0,
}));
