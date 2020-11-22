import { GET_TOPICS_QUERY_NAME } from '@topic/data/hooks/useGetTopicsQuery.hook';
import { deleteTopic, DeleteTopicParams } from '@topic/data/repository/DeleteTopic.mutation';
import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';

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
