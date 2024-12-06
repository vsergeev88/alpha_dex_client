import { Order } from '@shared/stores/models/Order';
import { useStores } from '@shared/stores/useStores';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

const NewOrderForm: React.FC = observer(() => {
  const { ordersStore } = useStores();
  const [tokenAmount, setTokenAmount] = useState('0');
  const [dollarAmount, setDollarAmount] = useState('0');

  const createOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder = new Order({
      tokenAmount: parseInt(tokenAmount),
      dollarAmount: parseInt(dollarAmount),
    });
    ordersStore.addOrder(newOrder);
  };

  return (
    <div className="">
      <form onSubmit={createOrder}>
        <input
          placeholder="token"
          type="number"
          min="0"
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
        />
        <input
          placeholder="dollar"
          type="number"
          min="0"
          value={dollarAmount}
          onChange={(e) => setDollarAmount(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Create Order
        </button>
      </form>
    </div>
  );
});

export default NewOrderForm;
