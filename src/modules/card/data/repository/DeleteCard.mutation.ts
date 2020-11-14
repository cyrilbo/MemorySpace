import { getRepository } from 'typeorm/browser';
import { CardEntity } from './Card.entity';

export interface DeleteCardParams {
  cardId: string;
}

export const deleteCard = async ({ cardId }: DeleteCardParams): Promise<void> => {
  const cardRepository = getRepository(CardEntity);
  await cardRepository.delete({ id: cardId });
  return;
};
