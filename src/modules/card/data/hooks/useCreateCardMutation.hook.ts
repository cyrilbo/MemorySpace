import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { Card } from '../../types/Card.type';
import { createCard, CreateCardParams } from '../repository/CreateCard.mutation';
import { GET_CARDS_QUERY_NAME } from './useGetCardsQuery.hook';

export const useCreateCardMutation = (
  onSuccess: () => void
): {
  createCard: (params: CreateCardParams) => Promise<Card>;
} => {
  const createCardCallback = useCallback(createCard, []);

  const cache = useQueryCache();

  const [createCardMutation] = useMutation(createCardCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
      onSuccess();
    },
  });
  return { createCard: createCardMutation };
};
