import { Entity } from 'typeorm/browser';
import { ICardEntity } from './../../../card/data/repository/Card.entity.interface';

@Entity('topic')
export class ITopicEntity {
  id: string;

  name: string;

  colorId: string;

  createdAt: Date;

  cards?: ICardEntity[];
}
