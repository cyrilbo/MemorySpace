import { getRepository } from 'typeorm/browser';
import { CardEntity } from './Card.entity';

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
