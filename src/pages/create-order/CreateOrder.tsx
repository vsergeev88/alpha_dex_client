import NewOrderForm from '@widgets/new-order-form';
import OrderList from '@widgets/orders-list';
import TokenRate from '@widgets/token-rate';
import { useSocketsApi } from './hooks/useSocketsApi';
import { observer } from 'mobx-react-lite';

const CreateOrder: React.FC = observer(() => {
  useSocketsApi();

  return (
    <div className="">
      <h1>Create order</h1>
      <TokenRate />
      <NewOrderForm />
      <OrderList />
    </div>
  );
});

export default CreateOrder;
