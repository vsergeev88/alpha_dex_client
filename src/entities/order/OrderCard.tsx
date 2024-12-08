import { round } from '@shared/helpers/number';
import { Order, ORDER_STATUS } from '@entities/order/OrderModel';
import { observer } from 'mobx-react-lite';

type TProps = { order: Order };

const OrderCard: React.FC<TProps> = observer(({ order }) => {
  const { amountTokens, amountDollars, status, createdDate } = order;

  const STATUS_CLASS: Record<ORDER_STATUS, string> = {
    [ORDER_STATUS.COMPLETED]: 'badge-success',
    [ORDER_STATUS.PROCESSING]: 'badge-warning',
  };

  return (
    <div className="card bg-secondary text-primary-content w-full">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <p className="text-md text-secondary-content">{createdDate}</p>
          <div className={`badge ${STATUS_CLASS[status]} gap-2 ml-auto`}>
            {status}
          </div>
        </div>
        <h2 className="card-title">
          {round(amountTokens)} TKN за {round(amountDollars)} USD
        </h2>{' '}
      </div>
    </div>
  );
});

export default OrderCard;
