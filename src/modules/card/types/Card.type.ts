export interface Card {
  id: string;
  topicId: string;
  createdAt: Date;
  lastFailureAt: Date;
  level: number;
  question: string;
  answer: string;
}
