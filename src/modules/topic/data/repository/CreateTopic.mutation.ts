import { getRepository } from 'typeorm/browser';
import { Topic } from '../../types/Topic.type';
import { adaptTopicEntityToTopic } from './Topic.adapters';
import { TopicEntity } from './Topic.entity';

export const createTopic = async (name: string): Promise<Topic> => {
  const topicRepository = getRepository(TopicEntity);
  const newTopicEntity = new TopicEntity();
  newTopicEntity.name = name;
  const topicEntityCreated = await topicRepository.save(newTopicEntity);
  return adaptTopicEntityToTopic(topicEntityCreated);
};