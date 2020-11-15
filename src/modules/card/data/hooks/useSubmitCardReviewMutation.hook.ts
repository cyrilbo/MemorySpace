import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { submitCardReview, SubmitCardReviewParams } from '../repository/SubmitCardReview.mutation';
import { GET_CARDS_QUERY_NAME } from './useGetCardsQuery.hook';

export const useSubmitCardReviewMutation = (
  onSuccess: () => void
): {
  submitCardReview: (params: SubmitCardReviewParams) => Promise<void>;
} => {
  const submitCardReviewCallback = useCallback(submitCardReview, []);
  const cache = useQueryCache();

  const [submitCardReviewMutation] = useMutation(submitCardReviewCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_CARDS_QUERY_NAME);
      onSuccess();
    },
  });
  return { submitCardReview: submitCardReviewMutation };
};
