import { getCards, GetCardsParams } from '@card/data/repository/GetCards.query';
import { Card } from '@card/types/Card.type';
import { useQuery } from 'react-query';

export const GET_CARDS_QUERY_NAME = 'GET_CARDS_QUERY_NAME';

export const useGetCardsQuery = (
  params: GetCardsParams
): { cards: Card[]; isLoading: boolean; isEmpty: boolean } => {
  const { data, isLoading } = useQuery([GET_CARDS_QUERY_NAME, params], getCards);
  return { cards: data || [], isLoading, isEmpty: data?.length === 0 };
};
