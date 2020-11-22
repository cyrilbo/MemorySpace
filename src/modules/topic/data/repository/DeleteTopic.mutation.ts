import { TopicEntity } from '@topic/data/repository/Topic.entity';
import { getRepository } from 'typeorm/browser';

export interface DeleteTopicParams {
  topicId: string;
}

export const deleteTopic = async ({ topicId }: DeleteTopicParams): Promise<void> => {
  const topicRepository = getRepository(TopicEntity);
  await topicRepository.delete({ id: topicId });
  return;
};
