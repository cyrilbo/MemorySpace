import { GET_CARDS_QUERY_NAME } from '@card/data/hooks/useGetCardsQuery.hook';
import { deleteCard, DeleteCardParams } from '@card/data/repository/DeleteCard.mutation';
import { useMutation, useQueryCache } from 'react-query';

export const useDeleteCardMutation = (): {
  deleteCard: (params: DeleteCardParams) => Promise<void>;
} => {
  const cache = useQueryCache();

  const [deleteCardMutation] = useMutation(deleteCard, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
    },
  });
  return { deleteCard: deleteCardMutation };
};
