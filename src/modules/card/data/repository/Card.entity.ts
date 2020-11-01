import { JoinColumn } from 'typeorm';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm/browser';
import { TopicEntity } from '../../../topic/data/repository/Topic.entity';

@Entity('card')
export class CardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TopicEntity, (topic) => topic.cards)
  @JoinColumn({
    name: 'topicId',
  })
  topic: TopicEntity;

  @Column('uuid', { nullable: false })
  topicId: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @Column('date', { nullable: false })
  lastFailureAt: Date;

  @Column('integer', { nullable: false, default: 1 })
  level: number;

  @Column({ length: 255, nullable: false })
  question: string;

  @Column('text', { nullable: false })
  answer: string;
}
