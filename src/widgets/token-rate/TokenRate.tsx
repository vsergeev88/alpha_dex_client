import { useStores } from '@shared/stores/useStores';
import { observer } from 'mobx-react-lite';
import React from 'react';

const TokenRate: React.FC = observer(() => {
  const {
    tokenRateStore: { tokenRate },
  } = useStores();

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Current rate</div>
        <div className="stat-value">
          {tokenRate ? (
            `$ ${tokenRate}`
          ) : (
            <span className="loading loading-dots loading-md"></span>
          )}
        </div>
      </div>
    </div>
  );
});

export default TokenRate;
