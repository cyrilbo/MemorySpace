import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '@navigation/RootNavigator/RootNavigator.routes';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type TopicSelectionScreenNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.TopicSelection
>;

export type TopicSelectionScreenRouteProp = RouteProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.TopicSelection
>;

export type TopicSelectionProps = {
  navigation: TopicSelectionScreenNavigationProp;
  route: TopicSelectionScreenRouteProp;
};
