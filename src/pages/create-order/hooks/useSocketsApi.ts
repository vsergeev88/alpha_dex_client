import { ORDERS_SERVICE_URL } from '@shared/constants/urls';
import { IOrder, Order } from '@shared/stores/models/Order';
import { useStores } from '@shared/stores/useStores';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export const useSocketsApi = () => {
  const { tokenRateStore, ordersStore } = useStores();

  useEffect(() => {
    const socket = io(ORDERS_SERVICE_URL);

    socket.on('tokenRate', (rate: string) => {
      tokenRateStore.setTokenRate(parseFloat(rate));
    });

    socket.on('orderList', (orders: IOrder[]) => {
      ordersStore.setOrders(orders.map((o) => new Order(o)));
    });

    socket.on('orderUpdated', (order: IOrder) => {
      const targetOrder = ordersStore.getOrderById(order.id);
      if (!targetOrder) {
        console.error('Order not found:', order.id);
        return;
      }
      targetOrder.updateStatus(order.status);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};
