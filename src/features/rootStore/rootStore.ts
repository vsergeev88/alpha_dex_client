import { makeAutoObservable } from 'mobx';
import OrdersStore from '@features/orders/ordersStore';
import TokenRateStore from '@features/token-rate/tokenRateStore';

class RootStore {
  ordersStore: OrdersStore;
  tokenRateStore: TokenRateStore;
  constructor() {
    this.ordersStore = new OrdersStore();
    this.tokenRateStore = new TokenRateStore();
    makeAutoObservable(this);
  }
}
export default RootStore;
export const rooStore = new RootStore();
