import { GET_TOPICS_QUERY_NAME } from '@topic/data/hooks/useGetTopicsQuery.hook';
import { createTopic } from '@topic/data/repository/CreateTopic.mutation';
import { Topic } from '@topic/types/Topic.type';
import { useMutation, useQueryCache } from 'react-query';

export const useCreateTopicMutation = (): {
  createTopic: (params: { name: string; colorId: string }) => Promise<Topic>;
} => {
  const cache = useQueryCache();
  const [createTopicMutation] = useMutation(createTopic, {
    onSuccess: () => {
      cache.invalidateQueries(GET_TOPICS_QUERY_NAME);
    },
  });
  return { createTopic: createTopicMutation };
};
