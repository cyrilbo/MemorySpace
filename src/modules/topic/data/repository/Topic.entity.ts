import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('topic')
export class TopicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  colorId: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;
}
