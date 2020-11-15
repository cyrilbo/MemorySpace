import { getRepository } from 'typeorm/browser';
import { Card } from './../../types/Card.type';
import { adaptCardEntityToCard } from './Card.adapters';
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
}: CreateCardParams): Promise<Card> => {
  const cardRepository = getRepository(CardEntity);
  const newCardEntity = new CardEntity();
  newCardEntity.topicId = topicId;
  newCardEntity.question = question;
  newCardEntity.answer = answer;
  newCardEntity.level = 1;
  newCardEntity.lastFailureAt = new Date();

  const cardEntityCreated = await cardRepository.save(newCardEntity);
  return adaptCardEntityToCard(cardEntityCreated);
};
