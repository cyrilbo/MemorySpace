import { NavigatorScreenParams } from '@react-navigation/native';
import { Topic } from '../../modules/topic/types/Topic.type';
import { AppNavigatorRouteParamsList } from '../AppNavigator/AppNavigator.routes';

export enum RootNavigatorRouteNames {
  AppNavigator = 'AppNavigator',
  CreateCardModal = 'CreateCardModal',
  SelectTopicModal = 'SelectTopicModal',
}

export type RootNavigatorRouteParamsList = {
  CreateCardModal: { topic?: Topic };
  SelectTopicModal: undefined;
  AppNavigator: NavigatorScreenParams<AppNavigatorRouteParamsList>;
};
