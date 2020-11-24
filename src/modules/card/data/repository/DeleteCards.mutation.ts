import { CardEntity } from '@card/data/repository/Card.entity';
import { getRepository } from 'typeorm/browser';

export interface DeleteCardsParams {
  topicId: string;
}

export const deleteCards = async ({ topicId }: DeleteCardsParams): Promise<void> => {
  const cardRepository = getRepository(CardEntity);
  await cardRepository.delete({ topicId });
  return;
};
