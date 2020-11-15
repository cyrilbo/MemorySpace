import { Card } from './../../types/Card.type';
const defaultCardMock: Card = {
  answer: 'default_answer',
  question: 'default_question',
  id: 'default_id',
  createdAt: new Date('2019-04-22T10:20:30Z').getTime(),
  lastFailureAt: new Date('2019-04-22T10:20:30Z').getTime(),
  level: 0,
  topicId: 'default_topic_id',
};

export const getCardMock = (params?: Partial<Card>): Card => ({ ...defaultCardMock, ...params });
