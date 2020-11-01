import { Card } from './../../types/Card.type';
import { CardEntity } from './Card.entity';

export const adaptCardEntityToCard = (cardEntity: CardEntity): Card => cardEntity;

export const adaptCardToCardEntity = (card: Card): CardEntity => card;
