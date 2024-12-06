import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export enum ORDER_STATUS {
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
}

export class Order {
  id: string;
  tokenAmount: number;
  dollarAmount: number;
  status: ORDER_STATUS;
  createdAt: Date;

  constructor(args: { tokenAmount: number; dollarAmount: number }) {
    this.id = uuidv4();
    this.tokenAmount = args.tokenAmount;
    this.dollarAmount = args.dollarAmount;
    this.status = ORDER_STATUS.IN_PROGRESS;
    this.createdAt = new Date();
    makeAutoObservable(this);
  }

  updateStatus(status: ORDER_STATUS) {
    this.status = status;
  }
}
