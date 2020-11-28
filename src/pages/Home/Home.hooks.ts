import { AppNavigatorRouteNames } from '@navigation/AppNavigator/AppNavigator.routes';
import { CardNavigatorRouteNames } from '@navigation/CardNavigator/CardNavigator.routes';
import { RootNavigatorRouteNames } from '@navigation/RootNavigator/RootNavigator.routes';
import { Topic } from '@topic/types/Topic.type';
import { HomeScreenNavigationProp } from './Home.interface';

export const useHomeNavigation = (
  navigation: HomeScreenNavigationProp
): {
  openEditCardModal: () => void;
  openTopicCardListScreen: (topic: Topic) => void;
  openPlayCardScreen: () => void;
} => {
  const openEditCardModal = () => navigation.navigate(RootNavigatorRouteNames.CardEdition);
  const openTopicCardListScreen = (topic: Topic) =>
    navigation.navigate(AppNavigatorRouteNames.CardNavigator, {
      screen: CardNavigatorRouteNames.TopicCardList,
      params: { topic },
    });

  const openPlayCardScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.CardNavigator, {
      screen: CardNavigatorRouteNames.CardReview,
    });
  return { openEditCardModal, openTopicCardListScreen, openPlayCardScreen };
};
