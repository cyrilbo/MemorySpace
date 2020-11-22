import { ITopicEntity } from '../../../topic/data/repository/Topic.entity.interface';

export interface ICardEntity {
  id: string;
  topic: ITopicEntity;
  topicId: string;
  createdAt: Date;
  lastFailureAt: Date;
  level: number;
  question: string;
  answer: string;
}
