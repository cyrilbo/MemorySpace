import { useCallback } from 'react';
import { useMutation, useQueryCache } from 'react-query';
import { Topic } from '../../types/Topic.type';
import { createTopic } from '../repository/CreateTopic.mutation';
import { GET_TOPICS_QUERY_NAME } from './useGetTopicsQuery.hook';

export const useCreateTopicMutation = (): { createTopic: (name: string) => Promise<Topic> } => {
  const createTopicCallback = useCallback(createTopic, []);

  const cache = useQueryCache();
  const [createTopicMutation] = useMutation(createTopicCallback, {
    onSuccess: () => {
      cache.invalidateQueries(GET_TOPICS_QUERY_NAME);
    },
  });
  return { createTopic: createTopicMutation };
};
