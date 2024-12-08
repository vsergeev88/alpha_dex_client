import { Order } from '@shared/stores/models/Order';
import { useStores } from '@shared/stores/useStores';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

const NewOrderForm: React.FC = observer(() => {
  const { ordersStore } = useStores();
  const [amountTokens, setAmountTokens] = useState('0');
  const [amountDollars, setAmountDollars] = useState('0');

  const clearForm = () => {
    setAmountDollars('0');
    setAmountTokens('0');
  };

  const createOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amountTokens, amountDollars }),
      });

      if (response.ok) {
        const newOrder = await response.json();
        ordersStore.addOrder(new Order(newOrder));
        clearForm();
      } else {
        console.error('Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const switchInput = () => {};

  return (
    <div className="">
      <h2>Add new order:</h2>
      <form onSubmit={createOrder}>
        <input
          placeholder="token"
          type="number"
          min="0"
          value={amountTokens}
          onChange={(e) => setAmountTokens(e.target.value)}
        />
        <button onClick={switchInput}>{`<->`}</button>
        <input
          placeholder="dollar"
          type="number"
          min="0"
          value={amountDollars}
          onChange={(e) => setAmountDollars(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Create Order
        </button>
      </form>
    </div>
  );
});

export default NewOrderForm;
