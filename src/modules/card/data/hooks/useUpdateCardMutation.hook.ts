import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { UpdateCardParams } from '../repository/UpdateCard.mutation';
import { updateCard } from './../repository/UpdateCard.mutation';
import { GET_CARDS_QUERY_NAME } from './useGetCardsQuery.hook';

export const useUpdateCardMutation = (
  onSuccess: () => void
): {
  updateCard: (params: UpdateCardParams) => Promise<void>;
} => {
  const updateCardCallback = useCallback(updateCard, []);
  const cache = useQueryCache();

  const [updateCardMutation] = useMutation(updateCardCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
      onSuccess();
    },
  });
  return { updateCard: updateCardMutation };
};
