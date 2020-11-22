import { JoinColumn } from 'typeorm';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm/browser';
import { ITopicEntity } from './../../../topic/data/repository/Topic.entity.interface';
import { ICardEntity } from './Card.entity.interface';

@Entity('card')
export class CardEntity implements ICardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne('TopicEntity', 'cards', {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'topicId',
  })
  topic: ITopicEntity;

  @Column('uuid', { nullable: false })
  topicId: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @Column('datetime', { nullable: false })
  lastFailureAt: Date;

  @Column('integer', { nullable: false, default: 1 })
  level: number;

  @Column({ length: 255, nullable: false })
  question: string;

  @Column('text', { nullable: false })
  answer: string;
}
