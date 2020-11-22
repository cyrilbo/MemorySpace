import { Card } from '@card/types/Card.type';
import { CardNavigatorRouteNames } from '@navigation/CardNavigator/CardNavigator.routes';
import { RootNavigatorRouteNames } from '@navigation/RootNavigator/RootNavigator.routes';
import { Topic } from '@topic/types/Topic.type';
import { TopicCardListScreenNavigationProp } from './TopicCardList.page';

export const useTopicCardListNavigation = (
  navigation: TopicCardListScreenNavigationProp,
  topic: Topic
): { openEditCardModal: (card?: Card) => void; openPlayCardScreen: () => void } => {
  const openPlayCardScreen = () =>
    navigation.navigate(CardNavigatorRouteNames.PlayCard, { topic: topic });
  const openEditCardModal = (card?: Card) =>
    navigation.navigate(RootNavigatorRouteNames.EditCardModal, { card, topic });
  return { openEditCardModal, openPlayCardScreen };
};
