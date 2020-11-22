import { CardEntity } from '@card/data/repository/Card.entity';
import { getRepository } from 'typeorm/browser';

export interface CreateCardParams {
  topicId: string;
  question: string;
  answer: string;
}

export const createCard = async ({
  topicId,
  question,
  answer,
}: CreateCardParams): Promise<void> => {
  const cardRepository = getRepository(CardEntity);
  const newCardEntity = new CardEntity();
  newCardEntity.topicId = topicId;
  newCardEntity.question = question;
  newCardEntity.answer = answer;
  newCardEntity.level = 1;
  newCardEntity.lastFailureAt = new Date();

  await cardRepository.save(newCardEntity);
  return;
};
