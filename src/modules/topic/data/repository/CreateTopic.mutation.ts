import { getRepository } from 'typeorm/browser';
import { Topic } from '../../types/Topic.type';
import { getRandomTopicColor } from './../../utils/getRandomTopicColor.utils';
import { adaptTopicEntityToTopic } from './Topic.adapters';
import { TopicEntity } from './Topic.entity';

export const createTopic = async (name: string): Promise<Topic> => {
  const topicRepository = getRepository(TopicEntity);
  const newTopicEntity = new TopicEntity();
  newTopicEntity.name = name;
  newTopicEntity.colorId = getRandomTopicColor().id;
  const topicEntityCreated = await topicRepository.save(newTopicEntity);
  return adaptTopicEntityToTopic(topicEntityCreated);
};
