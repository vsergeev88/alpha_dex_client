import { useStores } from '@shared/stores/useStores';
import { useEffect } from 'react';

export type TUseRateRecalculationProps = {
  amountDollars: number | null;
  dollarsInputRef: React.RefObject<HTMLInputElement>;
  amountTokens: number | null;
  tokensInputRef: React.RefObject<HTMLInputElement>;
  setAmountTokens: React.Dispatch<React.SetStateAction<number | null>>;
  setAmountDollars: React.Dispatch<React.SetStateAction<number | null>>;
};
export const useRateRecalculation = ({
  amountDollars,
  dollarsInputRef,
  amountTokens,
  tokensInputRef,
  setAmountTokens,
  setAmountDollars,
}: TUseRateRecalculationProps) => {
  const {
    tokenRateStore: { tokenRate },
  } = useStores();

  useEffect(() => {
    if (dollarsInputRef.current !== document.activeElement || !amountDollars) {
      return;
    }
    setAmountTokens(amountDollars * tokenRate);
  }, [amountDollars, tokenRate, dollarsInputRef]);

  useEffect(() => {
    if (tokensInputRef.current !== document.activeElement || !amountTokens) {
      return;
    }
    setAmountDollars(amountTokens * tokenRate);
  }, [amountTokens, tokenRate, tokensInputRef]);
};
