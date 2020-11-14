import { Card } from './../../types/Card.type';
import { CardEntity } from './Card.entity';

export const adaptCardEntityToCard = (cardEntity: CardEntity): Card => ({
  ...cardEntity,
  createdAt: cardEntity.createdAt.getTime(),
  lastFailureAt: cardEntity.lastFailureAt.getTime(),
});

export const adaptCardToCardEntity = (card: Card): CardEntity => ({
  ...card,
  createdAt: new Date(card.createdAt),
  lastFailureAt: new Date(card.lastFailureAt),
});
