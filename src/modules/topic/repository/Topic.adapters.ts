import { Topic } from '../types/Topic.type';
import { TopicEntity } from './Topic.entity';

export const adaptTopicToTopicEntity = (topic: Topic): TopicEntity => topic;

export const adaptTopicEntityToTopic = (topicEntity: TopicEntity): Topic => topicEntity;
