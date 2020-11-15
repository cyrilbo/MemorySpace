import { useGetCardsQuery } from '../../../card/data/hooks/useGetCardsQuery.hook';
import { getNextCardToPlayFromCards } from '../../libs/getNextCardToPlayFromCards.lib';
import { Card } from './../../../card/types/Card.type';

export const useGetNextCardToPlay = (topicId?: string): Card | null => {
  const { cards } = useGetCardsQuery({ topicId });
  return getNextCardToPlayFromCards(cards);
};
