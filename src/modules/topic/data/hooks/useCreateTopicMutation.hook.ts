import { GET_TOPICS_QUERY_NAME } from '@topic/data/hooks/useGetTopicsQuery.hook';
import { createTopic } from '@topic/data/repository/CreateTopic.mutation';
import { Topic } from '@topic/types/Topic.type';
import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';

export const useCreateTopicMutation = (): {
  createTopic: (params: { name: string; colorId: string }) => Promise<Topic>;
} => {
  const createTopicCallback = useCallback(createTopic, []);

  const cache = useQueryCache();
  const [createTopicMutation] = useMutation(createTopicCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_TOPICS_QUERY_NAME);
    },
  });
  return { createTopic: createTopicMutation };
};
