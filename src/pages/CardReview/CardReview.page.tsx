import { colors } from '@core/theme/colors';
import styled from '@core/theme/styled-components';
import { CardReviewForm } from '@srs/components/CardReviewForm/CardReviewForm.component';
import { NoCardToReview } from '@srs/components/NoCardToReview/NoCardToReview.component';
import { useGetNextCardToPlay } from '@srs/data/hooks/useGetNextCardToPlay.hook';
import { Topic } from '@topic/types/Topic.type';
import { getColorFromTopicColorId } from '@topic/utils/getColorFromTopicColorId.utils';
import React, { FunctionComponent, useLayoutEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { CardReviewProps } from './CardReview.interface';

export const CardReview: FunctionComponent<CardReviewProps> = ({ route, navigation }) => {
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
