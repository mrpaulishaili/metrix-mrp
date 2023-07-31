import { FC } from 'react';
import formatCurrency from '../../utils/formatCurrency';

interface SectorSummaryProps {
  type?: 'price' | 'qty';
  name: string;
  figure: string;
  percentage?: number;
}

const SectorSummary: FC<SectorSummaryProps> = ({
  type,
  name,
  figure,
  percentage,
}) => {
  return (
    <div className="flex flex-col gap-3 font-Poppins ">
      <small className="text-xs text-black-20">{name}</small>
      <p>
        {type == 'price'
          ? formatCurrency(Number(figure), 'NGN', 'en-NG')
          : figure}
        {percentage ? (
          <span className="ml-2 text-[.6rem] text-action-green">
            + {percentage} %
          </span>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};

export default SectorSummary;
