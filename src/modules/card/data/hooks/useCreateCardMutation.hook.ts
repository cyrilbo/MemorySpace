import { GET_CARDS_QUERY_NAME } from '@card/data/hooks/useGetCardsQuery.hook';
import { createCard, CreateCardParams } from '@card/data/repository/CreateCard.mutation';
import { useMutation, useQueryCache } from 'react-query';

export const useCreateCardMutation = (
  onSuccess: () => void
): {
  createCard: (params: CreateCardParams) => Promise<void>;
} => {
  const cache = useQueryCache();

  const [createCardMutation] = useMutation(createCard, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
      onSuccess();
    },
  });
  return { createCard: createCardMutation };
};
