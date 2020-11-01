import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm/browser';
import { CardEntity } from '../../../card/data/repository/Card.entity';

@Entity('topic')
export class TopicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @OneToMany(() => CardEntity, (card) => card.topic)
  cards?: CardEntity[];
}
