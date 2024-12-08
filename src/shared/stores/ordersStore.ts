import { makeAutoObservable } from 'mobx';
import { Order } from './models/Order';

class OrdersStore {
  listedOrders: Order[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  getOrderById(orderId: number): Order | null {
    console.log('getOrderById', orderId, this.listedOrders);
    return this.listedOrders.find((o) => o.id === orderId) ?? null;
  }

  setOrders(orders: Order[]) {
    this.listedOrders = orders;
  }

  addOrder(order: Order) {
    this.listedOrders.push(order);
  }
}
export const ordersStore = new OrdersStore();

export default OrdersStore;
