import { observer } from 'mobx-react-lite';
import { useStores } from '@features/rootStore/useStores';
import OrderCard from '@entities/order';

const OrdersList: React.FC = observer(() => {
  const { ordersStore } = useStores();

  return (
    <div className="">
      <div className="flex flex-col-reverse gap-8 justify-between">
        {ordersStore.listedOrders.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
});

export default OrdersList;
