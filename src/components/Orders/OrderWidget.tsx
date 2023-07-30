import { FC } from 'react';
import OrderCard from './OrderCard';

import orders from '../../data/orders.json';

interface OrderWidgetProps {}

const OrderWidget: FC<OrderWidgetProps> = () => {
  return (
    <div className="w-full max-w-xs bg-white p-5 rounded-md flex flex-col space-y-4">
      <h3>Recent orders</h3>
      {orders.map((order) => (
        <OrderCard
          name={order.name}
          price={order.price}
          img={`images/${order.img}`}
          date={order.date}
          status={order.status}
          qty={order.qty}
        ></OrderCard>
      ))}
    </div>
  );
};

export default OrderWidget;
