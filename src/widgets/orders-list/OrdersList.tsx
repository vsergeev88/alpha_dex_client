import { observer } from 'mobx-react-lite';
import { useStores } from '@shared/stores/useStores';
import OrderCard from '@entities/order';

const OrdersList: React.FC = observer(() => {
  const { ordersStore } = useStores();

  console.log('ordersStore', ordersStore.listedOrders);

  return (
    <div className="">
      <h2>Listed Tokens:</h2>
      {ordersStore.listedOrders.map((order) => (
        <OrderCard order={order} key={order.id} />
      ))}
    </div>
  );
});

export default OrdersList;
