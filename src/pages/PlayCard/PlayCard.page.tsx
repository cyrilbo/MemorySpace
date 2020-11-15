import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacer } from '../../core/components/Spacer/Spacer.component';
import { colors } from '../../core/theme/colors';
import styled from '../../core/theme/styled-components';
import { useSubmitCardReviewMutation } from '../../modules/card/data/hooks/useSubmitCardReviewMutation.hook';
import { BlurableAnswer } from '../../modules/srs/components/BlurableAnswer/BlurableAnswer.component';
import { NoCardToReview } from '../../modules/srs/components/NoCardToReview/NoCardToReview.component';
import { ResultForm } from '../../modules/srs/components/ResultForm/ResultForm.component';
import { useGetNextCardToPlay } from '../../modules/srs/data/hooks/useGetNextCardToPlay.hook';
import { getHexFromTopicColorId } from '../../modules/topic/utils/getHexFromTopicColorId.utils';
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
  const topicId: string | undefined = route.params?.topicId;
  const { isLoading, card } = useGetNextCardToPlay(topicId);

  const insets = useSafeAreaInsets();
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { submitCardReview } = useSubmitCardReviewMutation(() => setIsAnswerVisible(false));
  if (isLoading) {
    return <ActivityIndicator />;
  } else if (card) {
    return (
      <Container
        backgroundColor={getHexFromTopicColorId(card.topic.colorId)}
        paddingBottom={insets.bottom}
      >
        <EmptySpace />
        <Question>{card.question}</Question>
        <Spacer height={2} />
        <BlurableAnswer
          answer={card.answer}
          isVisible={isAnswerVisible}
          onToggleVisibilityPress={() => setIsAnswerVisible(!isAnswerVisible)}
        />
        <EmptySpace />
        <ResultForm
          onFailurePress={() => {
            submitCardReview({ cardId: card.id, isCardWellKnown: false });
          }}
          onSuccessPress={() => {
            submitCardReview({ cardId: card.id, isCardWellKnown: true });
          }}
        />
        <Spacer height={4} />
      </Container>
    );
  } else {
    return (
      <Container backgroundColor={colors.darkGrey} paddingBottom={insets.bottom}>
        <NoCardToReview />
      </Container>
    );
  }
};

const Container = styled.SafeAreaView<{ backgroundColor: string; paddingBottom: number }>(
  ({ backgroundColor, paddingBottom }) => ({
    flex: 1,
    backgroundColor,
    paddingBottom,
  })
);

const Question = styled.Text(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 24,
  paddingHorizontal: theme.gridUnit * 2,
}));

const EmptySpace = styled.View({ flex: 1 });
