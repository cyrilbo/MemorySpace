import { useGetCardsQuery } from '@card/data/hooks/useGetCardsQuery.hook';
import { Card } from '@card/types/Card.type';
import { getNextCardToPlayFromCards } from '@srs/libs/getNextCardToPlayFromCards.lib';

export const useGetNextCardToPlay = (topicId?: string): { card?: Card; isLoading: boolean } => {
  const { cards, isLoading } = useGetCardsQuery({ topicId });
  const nextCardToPlay = getNextCardToPlayFromCards(cards);
  return { card: nextCardToPlay, isLoading };
};
