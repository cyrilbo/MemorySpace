import { GET_CARDS_QUERY_NAME } from '@card/data/hooks/useGetCardsQuery.hook';
import { updateCard, UpdateCardParams } from '@card/data/repository/UpdateCard.mutation';
import { useMutation, useQueryCache } from 'react-query';

export const useUpdateCardMutation = (
  onSuccess: () => void
): {
  updateCard: (params: UpdateCardParams) => Promise<void>;
} => {
  const cache = useQueryCache();

  const [updateCardMutation] = useMutation(updateCard, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
      onSuccess();
    },
  });
  return { updateCard: updateCardMutation };
};
