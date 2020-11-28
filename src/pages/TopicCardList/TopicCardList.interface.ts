import { AppNavigatorRouteParamsList } from '@navigation/AppNavigator/AppNavigator.routes';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '@navigation/CardNavigator/CardNavigator.routes';
import { RootNavigatorRouteParamsList } from '@navigation/RootNavigator/RootNavigator.routes';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type TopicCardListScreenNavigationProp = CompositeNavigationProp<
  CompositeNavigationProp<
    StackNavigationProp<CardNavigatorRouteParamsList, CardNavigatorRouteNames.TopicCardList>,
    StackNavigationProp<AppNavigatorRouteParamsList>
  >,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

export type TopicCardListScreenRouteProp = RouteProp<
  CardNavigatorRouteParamsList,
  CardNavigatorRouteNames.TopicCardList
>;

export type TopicCardListProps = {
  navigation: TopicCardListScreenNavigationProp;
  route: TopicCardListScreenRouteProp;
};
