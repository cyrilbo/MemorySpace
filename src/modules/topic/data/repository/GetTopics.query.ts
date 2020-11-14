import { getRepository, Like } from 'typeorm/browser';
import { Topic } from '../../types/Topic.type';
import { TopicEntity } from '../repository/Topic.entity';
import { adaptTopicEntityToTopic } from './Topic.adapters';

interface GetTopicFilters {
  name?: string;
}

export const getTopics = async (_key: string, filters?: GetTopicFilters): Promise<Topic[]> => {
  const topicRepository = getRepository(TopicEntity);
  const topicEntities = topicRepository.find({ name: Like(`%${filters?.name ?? ''}%`) });
  return (await topicEntities).map(adaptTopicEntityToTopic);
};
