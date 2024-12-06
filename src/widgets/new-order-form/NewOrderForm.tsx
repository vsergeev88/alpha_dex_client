import { Order } from '@shared/stores/models/Order';
import { useStores } from '@shared/stores/useStores';
import { observer } from 'mobx-react-lite';

const NewOrderForm: React.FC = observer(() => {
  const { ordersStore } = useStores();
  const createOrder = () => {
    const newOrder = new Order({
      tokenAmount: 10,
      dollarAmount: 100,
    });
    ordersStore.addOrder(newOrder);
  };
  return (
    <div className="">
      NewOrderForm
      <button className="btn btn-primary" onClick={createOrder}>
        Create Order
      </button>
    </div>
  );
});

export default NewOrderForm;
