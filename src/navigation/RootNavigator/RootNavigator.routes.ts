import { NavigatorScreenParams } from '@react-navigation/native';
import { Card } from '../../modules/card/types/Card.type';
import { Topic } from '../../modules/topic/types/Topic.type';
import { AppNavigatorRouteParamsList } from '../AppNavigator/AppNavigator.routes';

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
