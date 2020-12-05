import { QuestionList } from '@card/components/QuestionList/QuestionList.component';
import { useGetCardsQuery } from '@card/data/hooks/useGetCardsQuery.hook';
import { useOpenEditCardModalButton } from '@card/hooks/useEditCardModalButton.hook';
import styled from '@core/libs/styled-components';
import { useTopicCardListNavigation } from '@pages/TopicCardList/TopicCardList.hooks';
import { HugePlayButton } from '@srs/components/HugePlayButton/HugePlayButton.component';
import { getColorFromTopicColorId } from '@topic/utils/getColorFromTopicColorId.utils';
import React, { FunctionComponent } from 'react';
import { TopicCardListProps } from './TopicCardList.interface';

export const TopicCardList: FunctionComponent<TopicCardListProps> = ({ route, navigation }) => {
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
