import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { Card } from '../../types/Card.type';
import { submitCardReview, SubmitCardReviewParams } from '../repository/SubmitCardReview.mutation';
import { GET_CARDS_QUERY_NAME } from './useGetCardsQuery.hook';

export const useSubmitCardReviewMutation = (): {
  submitCardReview: (params: SubmitCardReviewParams) => Promise<Card>;
} => {
  const submitCardReviewCallback = useCallback(submitCardReview, []);
  const cache = useQueryCache();

  const [submitCardReviewMutation] = useMutation(submitCardReviewCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
    },
  });
  return { submitCardReview: submitCardReviewMutation };
};
