import { useStores } from '@shared/stores/useStores';
import { AccentButton, IconButton } from '@shared/ui/button';
import { AccentInput } from '@shared/ui/input';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useRateRecalculation } from './hooks/useRateRecalculation';

const NewOrderForm: React.FC = observer(() => {
  const { ordersStore } = useStores();
  const tokensInputRef = React.useRef<HTMLInputElement>(null);
  const dollarsInputRef = React.useRef<HTMLInputElement>(null);
  const [amountTokens, setAmountTokens] = useState<number | null>(null);
  const [amountDollars, setAmountDollars] = useState<number | null>(null);

  useRateRecalculation({
    amountDollars,
    dollarsInputRef,
    amountTokens,
    tokensInputRef,
    setAmountTokens,
    setAmountDollars,
  });

  const clearForm = () => {
    setAmountDollars(0);
    setAmountTokens(0);
  };

  const createOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amountDollars || !amountTokens) {
      return;
    }
    ordersStore.createOrder({
      amountDollars,
      amountTokens,
    });
    clearForm();
  };

  const switchInput = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 card shadow-md bg-accent-content">
      <h2 className="text-2xl text-accent mb-4">Buy crypto</h2>
      <form onSubmit={createOrder}>
        <div className="flex gap-4 mb-4 items-center">
          <AccentInput
            ref={tokensInputRef}
            placeholder="tokens"
            type="float"
            min="0"
            value={amountTokens ?? ''}
            onChange={(e) => setAmountTokens(parseFloat(e.target.value))}
          />
          <IconButton
            className="btn-accent"
            onClick={switchInput}
          >{`<->`}</IconButton>
          <AccentInput
            ref={dollarsInputRef}
            placeholder="dollars"
            type="float"
            min="0"
            value={amountDollars ?? ''}
            onChange={(e) => setAmountDollars(parseFloat(e.target.value))}
          />
        </div>
        <div className="w-full flex justify-center">
          <AccentButton
            type="submit"
            disabled={ordersStore.isLoading || !amountTokens || !amountDollars}
          >
            Create Order
          </AccentButton>
        </div>
      </form>
    </div>
  );
});

export default NewOrderForm;
