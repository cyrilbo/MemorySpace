import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import styled from '../../core/theme/styled-components';
import { QuestionList } from '../../modules/card/components/QuestionList/QuestionList.component';
import { useGetCardsQuery } from '../../modules/card/data/hooks/useGetCardsQuery.hook';
import { getHexFromTopicColorId } from '../../modules/topic/utils/getHexFromTopicColorId.utils';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '../../navigation/CardNavigator/CardNavigator.routes';

type TopicCardListScreenNavigationProp = StackNavigationProp<
  CardNavigatorRouteParamsList,
  CardNavigatorRouteNames.TopicCardList
>;

type TopicCardListScreenRouteProp = RouteProp<
  CardNavigatorRouteParamsList,
  CardNavigatorRouteNames.TopicCardList
>;

type Props = {
  navigation: TopicCardListScreenNavigationProp;
  route: TopicCardListScreenRouteProp;
};

export const TopicCardList: FunctionComponent<Props> = ({ route }) => {
  const topic = route.params?.topic;
  const { cards } = useGetCardsQuery({ topicId: topic.id });
  return (
    <Container backgroundColor={getHexFromTopicColorId(topic.colorId)}>
      <QuestionList cards={cards} onQuestionPress={() => {}} />
    </Container>
  );
};

const Container = styled.SafeAreaView<{ backgroundColor: string }>(({ backgroundColor }) => ({
  flex: 1,
  backgroundColor,
}));
