import { observer } from 'mobx-react-lite';
import { useStores } from '@shared/stores/useStores';

const OrdersList: React.FC = observer(() => {
  const { ordersStore } = useStores();

  return (
    <div className="">
      {ordersStore.listedOrders.map((order) => (
        <div key={order.id}>
          <p>{order.tokenAmount}</p>
          <p>{order.dollarAmount}</p>
          <p>{order.status}</p>
          <p>{order.createdDate}</p>
        </div>
      ))}
    </div>
  );
});

export default OrdersList;
