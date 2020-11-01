import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('topic')
export class TopicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;
}
