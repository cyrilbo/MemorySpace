import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { Card } from '../../types/Card.type';
import { createCard, CreateCardParams } from '../repository/CreateCard.mutation';

export const useCreateCardMutation = (): {
  createCard: (params: CreateCardParams) => Promise<Card>;
} => {
  const createCardCallback = useCallback(createCard, []);

  const [createCardMutation] = useMutation(createCardCallback);
  return { createCard: createCardMutation };
};
