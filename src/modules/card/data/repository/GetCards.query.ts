import { getRepository } from 'typeorm/browser';
import { Card } from './../../types/Card.type';
import { adaptCardEntityToCard } from './Card.adapters';
import { CardEntity } from './Card.entity';

interface GetCardsFilters {
  topicId?: string;
}

export const getCards = async (_key: string, filters?: GetCardsFilters): Promise<Card[]> => {
  const cardRepository = getRepository(CardEntity);
  const cardEntities = cardRepository.find({ where: { topicId: filters.topicId } });
  return (await cardEntities).map(adaptCardEntityToCard);
};
