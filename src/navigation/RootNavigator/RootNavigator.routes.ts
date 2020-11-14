import { Topic } from '../../modules/topic/types/Topic.type';

export enum RootNavigatorRouteNames {
  Home = 'Home',
  CreateCardModal = 'CreateCardModal',
  SelectTopicModal = 'SelectTopicModal',
}

export type RootNavigatorRouteParamsList = {
  Home: undefined;
  CreateCardModal: { topic?: Topic };
  SelectTopicModal: undefined;
};
