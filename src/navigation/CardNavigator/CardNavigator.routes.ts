import { Topic } from '@topic/types/Topic.type';

export enum CardNavigatorRouteNames {
  TopicCardList = 'TopicCardList',
  PlayCard = 'PlayCard',
}

export type CardNavigatorRouteParamsList = {
  TopicCardList: { topic: Topic };
  PlayCard: { topic?: Topic };
};
