import { Topic } from './../../modules/topic/types/Topic.type';

export enum CardNavigatorRouteNames {
  TopicCardList = 'TopicCardList',
}

export type CardNavigatorRouteParamsList = {
  TopicCardList: { topic: Topic };
};
