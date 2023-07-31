import { FC } from 'react';
import formatCurrency from '../../utils/formatCurrency';

interface OrderCardProps {
  name: string;
  price: number;
  qty: number;
  date: string;
  status: string;
  img: string;
}

const OrderCard: FC<OrderCardProps> = ({
  name,
  price,
  qty,
  date,
  status,
  img,
}) => {
  return (
    <div className="flex w-full">
      <img src={img} height={40} width={40} alt={`${name} image`} />
      <div className="flex h-full w-full justify-between">
        <div className="flex flex-col gap-2 py-1">
          <p className="text-xs font-light">{name}</p>
          <h3 className="text-[0.7rem]">
            {formatCurrency(price, 'NGN', 'en-NG')} x {qty}
          </h3>
        </div>

        <div className="items-end flex flex-col justify-end text-xs gap-2 py-1">
          <small className="text-black-20">{date}</small>

          {status.toLowerCase() == 'pending' ? (
            <p className="text-[.5rem] text-action-red bg-red-trans px-2 rounded-md">
              {status}
            </p>
          ) : (
            <p className="text-[.5rem] text-action-green bg-green-trans px-2 rounded-md">
              {status}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
