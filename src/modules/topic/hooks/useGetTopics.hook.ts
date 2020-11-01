import { useCallback } from 'react';
import { getRepository } from 'typeorm/browser';
import { adaptTopicEntityToTopic } from '../repository/Topic.adapters';
import { TopicEntity } from '../repository/Topic.entity';
import { Topic } from '../types/Topic.type';

export const useGetTopics = (): { getTopics: () => Promise<Topic[]> } => {
  const getTopics = useCallback(async () => {
    const topicRepository = getRepository(TopicEntity);
    const topicEntities = topicRepository.find();
    return (await topicEntities).map(adaptTopicEntityToTopic);
  }, []);
  return { getTopics };
};
