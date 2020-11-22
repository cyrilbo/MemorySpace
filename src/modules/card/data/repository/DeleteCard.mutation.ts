import { CardEntity } from '@card/data/repository/Card.entity';
import { getRepository } from 'typeorm/browser';

export interface DeleteCardParams {
  cardId: string;
}

export const deleteCard = async ({ cardId }: DeleteCardParams): Promise<void> => {
  const cardRepository = getRepository(CardEntity);
  await cardRepository.delete({ id: cardId });
  return;
};
