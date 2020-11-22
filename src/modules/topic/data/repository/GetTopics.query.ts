import { adaptTopicEntityToTopic } from '@topic/data/repository/Topic.adapters';
import { TopicEntity } from '@topic/data/repository/Topic.entity';
import { Topic } from '@topic/types/Topic.type';
import { getRepository, Like } from 'typeorm/browser';

export interface GetTopicsParams {
  name?: string;
}

export const getTopics = async (_key: string, filters?: GetTopicsParams): Promise<Topic[]> => {
  const topicRepository = getRepository(TopicEntity);
  const topicEntities = topicRepository.find({ name: Like(`%${filters?.name ?? ''}%`) });
  return (await topicEntities).map(adaptTopicEntityToTopic);
};
