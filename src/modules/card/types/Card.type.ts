import { Topic } from './../../topic/types/Topic.type';

export interface Card {
  id: string;
  topicId: string;
  createdAt: number;
  lastFailureAt: number;
  level: number;
  question: string;
  answer: string;
  topic: Topic;
}
