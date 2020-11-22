import { ICardEntity } from '@card/data/repository/Card.entity.interface';
import { Entity } from 'typeorm/browser';

@Entity('topic')
export class ITopicEntity {
  id: string;

  name: string;

  colorId: string;

  createdAt: Date;

  cards?: ICardEntity[];
}
