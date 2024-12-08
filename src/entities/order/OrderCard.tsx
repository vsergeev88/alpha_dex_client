import { Order, ORDER_STATUS } from '@shared/stores/models/Order';
import { observer } from 'mobx-react-lite';

type TProps = { order: Order };

const OrderCard: React.FC<TProps> = observer(({ order }) => {
  const { amountTokens, amountDollars, status, createdDate } = order;

  const STATUS_CLASS: Record<ORDER_STATUS, string> = {
    [ORDER_STATUS.COMPLETED]: 'badge-success',
    [ORDER_STATUS.PROCESSING]: 'badge-warning',
  };

  return (
    <div>
      <div className={`badge ${STATUS_CLASS[status]} gap-2`}>{status}</div>
      <p>{amountTokens}</p>
      <p>{amountDollars}</p>
      <p>{createdDate}</p>
    </div>
  );
});

export default OrderCard;
