import { getRepository } from 'typeorm/browser';
import { Topic } from '../../types/Topic.type';
import { TopicEntity } from '../repository/Topic.entity';
import { adaptTopicEntityToTopic } from './Topic.adapters';

export const getTopics = async (): Promise<Topic[]> => {
  const topicRepository = getRepository(TopicEntity);
  const topicEntities = topicRepository.find();
  return (await topicEntities).map(adaptTopicEntityToTopic);
};
