import { getDateHuman } from '@shared/helpers/date';
import { makeAutoObservable } from 'mobx';

export enum ORDER_STATUS {
  COMPLETED = 'Completed',
  PROCESSING = 'Processing',
}

export interface IOrder {
  id: number;
  amountDollars: number;
  amountTokens: number;
  status: ORDER_STATUS;
  createdAt: string;
}

export class Order {
  id: number;
  amountDollars: number;
  amountTokens: number;
  status: ORDER_STATUS;
  createdAt: string;

  constructor(args: IOrder) {
    this.id = args.id;
    this.amountTokens = args.amountTokens;
    this.amountDollars = args.amountDollars;
    this.status = args.status;
    this.createdAt = args.createdAt;
    makeAutoObservable(this);
  }

  updateStatus(status: ORDER_STATUS) {
    console.log('updateStatus', status);
    this.status = status;
  }

  get createdDate(): string {
    return getDateHuman(new Date(this.createdAt));
  }
}
