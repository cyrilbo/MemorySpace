import { CardEntity } from '@card/data/repository/Card.entity';
import { getRepository } from 'typeorm/browser';

export interface UpdateCardParams {
  cardId: string;
  topicId: string;
  question: string;
  answer: string;
}

export const updateCard = async ({
  cardId,
  topicId,
  question,
  answer,
}: UpdateCardParams): Promise<void> => {
  const cardRepository = getRepository(CardEntity);
  const cardEntity = await cardRepository.findOneOrFail(cardId);
  cardEntity.topicId = topicId;
  cardEntity.question = question;
  cardEntity.answer = answer;
  await cardRepository.save(cardEntity);
  return;
};
