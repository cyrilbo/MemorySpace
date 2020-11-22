import { CardEntity } from '@card/data/repository/Card.entity';
import { Card } from '@card/types/Card.type';
import { Topic } from '@root/src/modules/topic/types/Topic.type';

export const adaptCardEntityToCard = (cardEntity: CardEntity, topic: Topic): Card => ({
  ...cardEntity,
  createdAt: cardEntity.createdAt.getTime(),
  lastFailureAt: cardEntity.lastFailureAt.getTime(),
  topic,
});

export const adaptCardToCardEntity = (card: Card): CardEntity => ({
  ...card,
  createdAt: new Date(card.createdAt),
  lastFailureAt: new Date(card.lastFailureAt),
  topicId: card.topic.id,
});
