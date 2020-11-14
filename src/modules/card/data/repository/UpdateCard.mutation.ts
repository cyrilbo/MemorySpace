import { getRepository } from 'typeorm/browser';
import { Card } from '../../types/Card.type';
import { adaptCardEntityToCard } from './Card.adapters';
import { CardEntity } from './Card.entity';

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
}: UpdateCardParams): Promise<Card> => {
  const cardRepository = getRepository(CardEntity);
  const cardEntity = await cardRepository.findOneOrFail(cardId);
  cardEntity.topicId = topicId;
  cardEntity.question = question;
  cardEntity.answer = answer;
  const cardEntityUpdated = await cardRepository.save(cardEntity);
  return adaptCardEntityToCard(cardEntityUpdated);
};
