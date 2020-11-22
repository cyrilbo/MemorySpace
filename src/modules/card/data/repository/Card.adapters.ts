import { CardEntity } from '@card/data/repository/Card.entity';
import { Card } from '@card/types/Card.type';
import {
  adaptTopicEntityToTopic,
  adaptTopicToTopicEntity,
} from '@topic/data/repository/Topic.adapters';

export const adaptCardEntityToCard = (cardEntity: CardEntity): Card => ({
  ...cardEntity,
  createdAt: cardEntity.createdAt.getTime(),
  lastFailureAt: cardEntity.lastFailureAt.getTime(),
  topic: adaptTopicEntityToTopic(cardEntity.topic),
});

export const adaptCardToCardEntity = (card: Card): CardEntity => ({
  ...card,
  createdAt: new Date(card.createdAt),
  lastFailureAt: new Date(card.lastFailureAt),
  topic: card.topic ? adaptTopicToTopicEntity(card.topic) : undefined,
});
