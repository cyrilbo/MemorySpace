import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('card')
export class CardEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
