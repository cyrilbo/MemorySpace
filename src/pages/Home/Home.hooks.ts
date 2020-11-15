import { Topic } from '../../modules/topic/types/Topic.type';
import { AppNavigatorRouteNames } from '../../navigation/AppNavigator/AppNavigator.routes';
import { CardNavigatorRouteNames } from '../../navigation/CardNavigator/CardNavigator.routes';
import { RootNavigatorRouteNames } from '../../navigation/RootNavigator/RootNavigator.routes';
import { HomeScreenNavigationProp } from './Home.page';

export const useHomeNavigation = (
  navigation: HomeScreenNavigationProp
): {
  openEditCardModal: () => void;
  openTopicCardListScreen: (topic: Topic) => void;
  openPlayCardScreen: () => void;
} => {
  const openEditCardModal = () => navigation.navigate(RootNavigatorRouteNames.EditCardModal);
  const openTopicCardListScreen = (topic: Topic) =>
    navigation.navigate(AppNavigatorRouteNames.CardNavigator, {
      screen: CardNavigatorRouteNames.TopicCardList,
      params: { topic },
    });

  const openPlayCardScreen = () =>
    navigation.navigate(AppNavigatorRouteNames.CardNavigator, {
      screen: CardNavigatorRouteNames.PlayCard,
    });
  return { openEditCardModal, openTopicCardListScreen, openPlayCardScreen };
};
