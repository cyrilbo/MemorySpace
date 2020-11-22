import { getCards } from '@card/data/repository/GetCards.query';
import { Card } from '@card/types/Card.type';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export const GET_CARDS_QUERY_NAME = 'GET_CARDS_QUERY_NAME';

interface GetCardsQueryFilters {
  topicId?: string;
}

export const useGetCardsQuery = (
  filters?: GetCardsQueryFilters
): { cards: Card[]; isLoading: boolean; isEmpty: boolean } => {
  const getCardsCallback = useCallback(getCards, [filters]);
  const { data, isLoading } = useQuery([GET_CARDS_QUERY_NAME, filters], getCardsCallback);
  return { cards: data || [], isLoading, isEmpty: data?.length === 0 };
};
