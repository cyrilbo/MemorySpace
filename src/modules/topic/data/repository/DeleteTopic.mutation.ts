import { getRepository } from 'typeorm/browser';
import { TopicEntity } from './Topic.entity';

export interface DeleteTopicParams {
  topicId: string;
}

export const deleteTopic = async ({ topicId }: DeleteTopicParams): Promise<void> => {
  const topicRepository = getRepository(TopicEntity);
  await topicRepository.delete({ id: topicId });
  return;
};
