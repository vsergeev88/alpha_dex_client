import { makeAutoObservable } from 'mobx';
import OrdersStore from './ordersStore';

class RootStore {
  ordersStore: OrdersStore;
  constructor() {
    this.ordersStore = new OrdersStore();
    makeAutoObservable(this);
  }
}
export default RootStore;
export const rooStore = new RootStore();
