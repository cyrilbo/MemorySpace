import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { deleteTopic, DeleteTopicParams } from '../repository/DeleteTopic.mutation';
import { GET_TOPICS_QUERY_NAME } from './useGetTopicsQuery.hook';

export const useDeleteTopicMutation = (): {
  deleteTopic: (params: DeleteTopicParams) => Promise<void>;
} => {
  const deleteTopicCallback = useCallback(deleteTopic, []);
  const cache = useQueryCache();

  const [deleteTopicMutation] = useMutation(deleteTopicCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_TOPICS_QUERY_NAME);
    },
  });
  return { deleteTopic: deleteTopicMutation };
};
