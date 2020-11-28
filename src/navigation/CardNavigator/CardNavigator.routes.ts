import { Topic } from '@topic/types/Topic.type';

export enum CardNavigatorRouteNames {
  TopicCardList = 'TopicCardList',
  CardReview = 'CardReview',
}

export type CardNavigatorRouteParamsList = {
  [CardNavigatorRouteNames.TopicCardList]: { topic: Topic };
  [CardNavigatorRouteNames.CardReview]: { topic?: Topic };
};
