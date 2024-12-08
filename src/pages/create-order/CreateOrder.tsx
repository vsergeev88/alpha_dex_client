import NewOrderForm from '@widgets/new-order-form';
import OrderList from '@widgets/orders-list';
import TokenRate from '@features/token-rate';
import { useSocketsApi } from './hooks/useSocketsApi';
import { observer } from 'mobx-react-lite';

const CreateOrder: React.FC = observer(() => {
  useSocketsApi();

  return (
    <main className="flex justify-center w-full">
      <div className="max-w-[600px] flex flex-col gap-10">
        <h1 className="text-3xl font-bold underline text-center my-4">
          Hello Alpha DEX!
        </h1>
        <TokenRate />
        <NewOrderForm />
        <OrderList />
      </div>
    </main>
  );
});

export default CreateOrder;
