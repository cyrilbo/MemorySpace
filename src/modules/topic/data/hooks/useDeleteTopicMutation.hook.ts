import { GET_TOPICS_QUERY_NAME } from '@topic/data/hooks/useGetTopicsQuery.hook';
import { deleteTopic, DeleteTopicParams } from '@topic/data/repository/DeleteTopic.mutation';
import { useMutation, useQueryCache } from 'react-query';

export const useDeleteTopicMutation = (): {
  deleteTopic: (params: DeleteTopicParams) => Promise<void>;
} => {
  const cache = useQueryCache();

  const [deleteTopicMutation] = useMutation(deleteTopic, {
    onSuccess: () => {
      cache.invalidateQueries(GET_TOPICS_QUERY_NAME);
    },
  });
  return { deleteTopic: deleteTopicMutation };
};
