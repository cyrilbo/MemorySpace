import { useGetCardsQuery } from '../../../card/data/hooks/useGetCardsQuery.hook';
import { getNextCardToPlayFromCards } from '../../libs/getNextCardToPlayFromCards.lib';
import { Card } from './../../../card/types/Card.type';

export const useGetNextCardToPlay = (topicId?: string): { card?: Card; isLoading: boolean } => {
  const { cards, isLoading } = useGetCardsQuery({ topicId });
  const nextCardToPlay = getNextCardToPlayFromCards(cards);
  return { card: nextCardToPlay, isLoading };
};
