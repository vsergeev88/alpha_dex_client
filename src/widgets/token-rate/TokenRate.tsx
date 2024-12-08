import { useStores } from '@shared/stores/useStores';
import { observer } from 'mobx-react-lite';
import React from 'react';

const TokenRate: React.FC = observer(() => {
  const {
    tokenRateStore: { tokenRate },
  } = useStores();

  return (
    <div className="stats">
      <div className="stat">
        <div className="stat-title">Текущий курс</div>
        <div className="stat-value">
          1 TKN ={' '}
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
