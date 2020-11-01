import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity('topic')
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;
}
