import { observer } from 'mobx-react-lite';
import { useStores } from '@shared/stores/useStores';
import OrderCard from '@entities/order';

const OrdersList: React.FC = observer(() => {
  const { ordersStore } = useStores();

  return (
    <div className="">
      <h2>Listed Tokens:</h2>
      <div className="flex flex-col-reverse gap-2 justify-between">
        {ordersStore.listedOrders.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
});

export default OrdersList;
