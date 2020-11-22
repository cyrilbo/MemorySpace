import { adaptCardEntityToCard } from '@card/data/repository/Card.adapters';
import { CardEntity } from '@card/data/repository/Card.entity';
import { Card } from '@card/types/Card.type';
import { getRepository } from 'typeorm/browser';
import { getTopics } from './../../../topic/data/repository/GetTopics.query';

export interface GetCardsParams {
  topicId?: string;
}

export const getCards = async (
  _key: string,
  { topicId }: GetCardsParams | undefined
): Promise<Card[]> => {
  const cardRepository = getRepository(CardEntity);
  const cardEntities = await cardRepository.find({
    where: topicId ? { topicId } : undefined,
  });
  const topics = await getTopics('getTopics');

  return cardEntities.map((cardEntity) =>
    adaptCardEntityToCard(
      cardEntity,
      topics.find((topic) => topic.id === cardEntity.topicId)
    )
  );
};
