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
  const lastActiveInputRef = React.useRef<HTMLInputElement | null>(null);

  useRateRecalculation({
    amountDollars,
    dollarsInputRef,
    amountTokens,
    tokensInputRef,
    setAmountTokens,
    setAmountDollars,
  });

  const clearForm = () => {
    setAmountDollars(null);
    setAmountTokens(null);
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

  const switchInput = (
    e: React.FormEvent<HTMLButtonElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      !lastActiveInputRef.current ||
      lastActiveInputRef.current === tokensInputRef.current
    ) {
      dollarsInputRef.current?.focus();
    } else {
      tokensInputRef.current?.focus();
    }
  };

  const commonInputProps = {
    type: 'float',
    min: '0',
  };

  return (
    <div className="p-4 card shadow-md bg-accent-content">
      <h2 className="text-2xl text-accent mb-4">Купить токены</h2>
      <form onSubmit={createOrder}>
        <div className="flex gap-4 mb-4 items-center">
          <AccentInput
            label="Количество токенов"
            ref={tokensInputRef}
            {...commonInputProps}
            placeholder="TKN"
            value={amountTokens ?? ''}
            onFocus={() =>
              (lastActiveInputRef.current = tokensInputRef.current)
            }
            onChange={(e) => setAmountTokens(parseFloat(e.target.value))}
          />
          <IconButton className="btn-accent mt-8" onClick={switchInput}>
            {`<->`}
          </IconButton>
          <AccentInput
            label="Сумма в долларах"
            ref={dollarsInputRef}
            {...commonInputProps}
            placeholder="USD"
            value={amountDollars ?? ''}
            onFocus={() =>
              (lastActiveInputRef.current = dollarsInputRef.current)
            }
            onChange={(e) => setAmountDollars(parseFloat(e.target.value))}
          />
        </div>
        <div className="w-full flex justify-center">
          <AccentButton
            type="submit"
            disabled={ordersStore.isLoading || !amountTokens || !amountDollars}
          >
            Создать ордер
          </AccentButton>
        </div>
      </form>
    </div>
  );
});

export default NewOrderForm;
