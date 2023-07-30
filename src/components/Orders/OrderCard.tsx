import { FC } from 'react';

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
        <div className="">
          <p>{name}</p>
          <h3>
            {price} x {qty}
          </h3>
        </div>

        <div className="self-end flex flex-col justify-end">
          <small>{date}</small>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
