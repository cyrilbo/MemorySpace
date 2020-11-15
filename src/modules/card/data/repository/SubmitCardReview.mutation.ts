import { getRepository } from 'typeorm/browser';
import { CardEntity } from './Card.entity';

export interface SubmitCardReviewParams {
  cardId: string;
  isCardWellKnown: boolean;
}

export const submitCardReview = async ({
  cardId,
  isCardWellKnown,
}: SubmitCardReviewParams): Promise<void> => {
  const cardRepository = getRepository(CardEntity);
  const cardEntity = await cardRepository.findOneOrFail(cardId);
  if (isCardWellKnown) {
    cardEntity.level = cardEntity.level + 1;
  } else {
    cardEntity.lastFailureAt = new Date();
    cardEntity.level = 1;
  }
  await cardRepository.save(cardEntity);
  return;
};
