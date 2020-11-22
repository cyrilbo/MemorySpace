import { TopicEntity } from '@topic/data/repository/Topic.entity';
import { Topic } from '@topic/types/Topic.type';

export const adaptTopicToTopicEntity = (topic: Topic): TopicEntity => ({
  ...topic,
  createdAt: new Date(topic.createdAt),
});

export const adaptTopicEntityToTopic = (topicEntity: TopicEntity): Topic => ({
  ...topicEntity,
  createdAt: topicEntity.createdAt.getTime(),
});
