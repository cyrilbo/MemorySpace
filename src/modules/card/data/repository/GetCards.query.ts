import { adaptCardEntityToCard } from '@card/data/repository/Card.adapters';
import { CardEntity } from '@card/data/repository/Card.entity';
import { Card } from '@card/types/Card.type';
import { getRepository } from 'typeorm/browser';

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
