import { makeAutoObservable, flow } from 'mobx';
import { Order, IOrder } from '../../entities/order/OrderModel';
import { ORDERS_SERVICE_URL } from '@shared/constants/urls';

const POST_ORDER_URL = `${ORDERS_SERVICE_URL}/orders`;

class OrdersStore {
  listedOrders: Order[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this, {
      createOrder: flow,
    });
  }

  getOrderById(orderId: number): Order | null {
    return this.listedOrders.find((o) => o.id === orderId) ?? null;
  }

  setOrders(orders: Order[]) {
    this.listedOrders = orders;
  }

  addOrder(order: Order) {
    this.listedOrders.push(order);
  }

  *createOrder({
    amountTokens,
    amountDollars,
  }: Pick<IOrder, 'amountTokens' | 'amountDollars'>): Generator<
    Promise<Response>,
    void,
    Response
  > {
    this.isLoading = true;
    this.error = null;

    try {
      const response = yield fetch(POST_ORDER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amountTokens, amountDollars }),
      });

      if (response.ok) {
        const newOrderData = yield response.json();
        // TODO: add type guard here maybe
        const newOrder = new Order(newOrderData as unknown as IOrder);
        this.addOrder(newOrder);
      } else {
        this.error = 'Failed to create order';
        console.error(this.error);
      }
    } catch (error) {
      this.error = 'Error creating order';
      console.error(this.error, error);
    } finally {
      this.isLoading = false;
    }
  }
}

export const ordersStore = new OrdersStore();

export default OrdersStore;
