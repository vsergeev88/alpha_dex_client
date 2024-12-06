import { makeAutoObservable } from 'mobx';
import { Order } from './models/Order';

class OrdersStore {
  listedOrders: Order[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addOrder(order: Order) {
    this.listedOrders.push(order);
  }

  removeOrder(orderId: string) {
    this.listedOrders = this.listedOrders.filter((o) => o.id !== orderId);
  }
}
export const ordersStore = new OrdersStore();

export default OrdersStore;
