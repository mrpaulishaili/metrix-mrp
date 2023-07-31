import { FC } from 'react';
import SectorSummary from './SectorSummary';
import { AiOutlinePieChart } from 'react-icons/ai';

interface SummaryCardProps {}

const SummaryCard: FC<SummaryCardProps> = () => {
  return (
    <div className="flex flex-col py-2 px-4 bg-white w-full max-w-xs rounded-md">
      <div className="flex mb-5">
        <div className="icon bg-green-trans p-[0.35rem] rounded-md text-action-green">
          <AiOutlinePieChart size={18} />
        </div>
        <div className="select-from"></div>
      </div>

      <div className="flex gap-3 justify-between ">
        <SectorSummary type="price" name="Sales" figure="300000" />

        <SectorSummary type="qty" name="Volume" figure="450" percentage={20} />
      </div>
    </div>
  );
};

export default SummaryCard;
