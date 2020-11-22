import { GET_CARDS_QUERY_NAME } from '@card/data/hooks/useGetCardsQuery.hook';
import {
  submitCardReview,
  SubmitCardReviewParams,
} from '@card/data/repository/SubmitCardReview.mutation';
import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';

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
