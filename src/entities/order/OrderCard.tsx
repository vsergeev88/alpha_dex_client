import { Order } from '@shared/stores/models/Order';
import { observer } from 'mobx-react-lite';

type TProps = { order: Order };

const OrderCard: React.FC<TProps> = observer(({ order }) => {
  const { amountTokens, amountDollars, status, createdDate } = order;
  return (
    <div>
      <p>{amountTokens}</p>
      <p>{amountDollars}</p>
      <p>{status}</p>
      <p>{createdDate}</p>
    </div>
  );
});

export default OrderCard;
