import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { deleteCard, DeleteCardParams } from '../repository/DeleteCard.mutation';
import { GET_CARDS_QUERY_NAME } from './useGetCardsQuery.hook';

export const useDeleteCardMutation = (): {
  deleteCard: (params: DeleteCardParams) => Promise<void>;
} => {
  const deleteCardCallback = useCallback(deleteCard, []);
  const cache = useQueryCache();

  const [deleteCardMutation] = useMutation(deleteCardCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
    },
  });
  return { deleteCard: deleteCardMutation };
};
