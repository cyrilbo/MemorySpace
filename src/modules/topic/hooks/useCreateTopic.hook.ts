import { useCallback } from 'react';
import { getRepository } from 'typeorm/browser';
import { Topic } from '../types/Topic.type';
import { adaptTopicEntityToTopic } from './../repository/Topic.adapters';
import { TopicEntity } from './../repository/Topic.entity';

export const useCreateTopic = (): { createTopic: (name: string) => Promise<Topic> } => {
  const createTopic = useCallback(async (name: string) => {
    const topicRepository = getRepository(TopicEntity);
    const newTopicEntity = new TopicEntity();
    newTopicEntity.name = name;
    const topicEntityCreated = await topicRepository.save(newTopicEntity);
    return adaptTopicEntityToTopic(topicEntityCreated);
  }, []);
  return { createTopic };
};
