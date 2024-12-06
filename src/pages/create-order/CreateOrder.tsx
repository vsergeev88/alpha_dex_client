import NewOrderForm from '@widgets/new-order-form';
import OrderList from '@widgets/orders-list';

const CreateOrder: React.FC = () => {
  return (
    <div className="">
      <h1>Create order</h1>
      <NewOrderForm />
      <OrderList />
    </div>
  );
};

export default CreateOrder;
