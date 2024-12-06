import { observer } from 'mobx-react-lite';
import { useStores } from '@shared/stores/useStores';

const OrdersList: React.FC = observer(() => {
  const { ordersStore } = useStores();
  console.log(ordersStore.listedOrders);
  return (
    <div className="">
      {ordersStore.listedOrders.map((order) => (
        <div key={order.id}>
          <p>{order.id}</p>
          <p>{order.tokenAmount}</p>
          <p>{order.dollarAmount}</p>
          <p>{order.status}</p>
          <p>{order.createdAt.toISOString()}</p>
          <button onClick={() => ordersStore.removeOrder(order.id)}>
            Delete order
          </button>
        </div>
      ))}
    </div>
  );
});

export default OrdersList;
