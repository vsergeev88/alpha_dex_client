import { useStores } from '@shared/stores/useStores';
import { observer } from 'mobx-react-lite';
import React from 'react';

const TokenRate: React.FC = observer(() => {
  const {
    tokenRateStore: { tokenRate },
  } = useStores();

  return (
    <div>
      <h2>Current Token Rate</h2>
      <p>{tokenRate ? `${tokenRate} USD` : 'Loading...'}</p>
    </div>
  );
});

export default TokenRate;
