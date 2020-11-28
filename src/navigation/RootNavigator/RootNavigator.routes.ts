import { Card } from '@card/types/Card.type';
import { AppNavigatorRouteParamsList } from '@navigation/AppNavigator/AppNavigator.routes';
import { NavigatorScreenParams } from '@react-navigation/native';
import { Topic } from '@topic/types/Topic.type';

export enum RootNavigatorRouteNames {
  AppNavigator = 'AppNavigator',
  CardEdition = 'CardEdition',
  TopicSelection = 'TopicSelection',
}

export type CardEditionScreenParams = { topic?: Topic; card?: Card };

export type RootNavigatorRouteParamsList = {
  [RootNavigatorRouteNames.CardEdition]: CardEditionScreenParams;
  [RootNavigatorRouteNames.TopicSelection]: undefined;
  [RootNavigatorRouteNames.AppNavigator]: NavigatorScreenParams<AppNavigatorRouteParamsList>;
};
