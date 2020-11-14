import { Topic } from '../../types/Topic.type';
import { TopicEntity } from './Topic.entity';

export const adaptTopicToTopicEntity = (topic: Topic): TopicEntity => ({
  ...topic,
  createdAt: new Date(topic.createdAt),
});

export const adaptTopicEntityToTopic = (topicEntity: TopicEntity): Topic => ({
  ...topicEntity,
  createdAt: topicEntity.createdAt.getTime(),
});
