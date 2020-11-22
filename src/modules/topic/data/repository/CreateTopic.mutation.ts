import { adaptTopicEntityToTopic } from '@topic/data/repository/Topic.adapters';
import { TopicEntity } from '@topic/data/repository/Topic.entity';
import { Topic } from '@topic/types/Topic.type';
import { getRepository } from 'typeorm/browser';

export const createTopic = async (params: { name: string; colorId: string }): Promise<Topic> => {
  const topicRepository = getRepository(TopicEntity);
  const newTopicEntity = new TopicEntity();
  newTopicEntity.name = params.name;
  newTopicEntity.colorId = params.colorId;
  const topicEntityCreated = await topicRepository.save(newTopicEntity);
  return adaptTopicEntityToTopic(topicEntityCreated);
};
