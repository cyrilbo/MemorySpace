import { getRepository } from 'typeorm/browser';
import { Card } from './../../types/Card.type';
import { adaptCardEntityToCard } from './Card.adapters';
import { CardEntity } from './Card.entity';

interface GetCardsParams {
  topicId?: string;
}

export const getCards = async (
  _key: string,
  { topicId }: GetCardsParams | undefined
): Promise<Card[]> => {
  const cardRepository = getRepository(CardEntity);
  const cardEntities = await cardRepository.find({
    relations: ['topic'],
    where: topicId ? { topicId } : undefined,
  });
  return cardEntities.map(adaptCardEntityToCard);
};
