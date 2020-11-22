import { Card } from '@card/types/Card.type';
import { AppNavigatorRouteParamsList } from '@navigation/AppNavigator/AppNavigator.routes';
import { NavigatorScreenParams } from '@react-navigation/native';
import { Topic } from '@topic/types/Topic.type';

export enum RootNavigatorRouteNames {
  AppNavigator = 'AppNavigator',
  EditCardModal = 'EditCardModal',
  SelectTopicModal = 'SelectTopicModal',
}

export type EditCardModalCreationParams = { topic?: Topic; card?: Card };

export type RootNavigatorRouteParamsList = {
  EditCardModal: EditCardModalCreationParams;
  SelectTopicModal: undefined;
  AppNavigator: NavigatorScreenParams<AppNavigatorRouteParamsList>;
};
