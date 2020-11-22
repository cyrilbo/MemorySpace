import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/browser';
import { ICardEntity } from './../../../card/data/repository/Card.entity.interface';
import { ITopicEntity } from './Topic.entity.interface';

@Entity('topic')
export class TopicEntity implements ITopicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  colorId: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @OneToMany('CardEntity', 'topic')
  cards?: ICardEntity[];
}
