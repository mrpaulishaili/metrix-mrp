import { FC } from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import OrderWidget from '../../components/Orders/OrderWidget';
import SummaryCard from '../../components/Elements/SummaryCard';
import SectorSummary from '../../components/Elements/SectorSummary';

import { AiOutlinePieChart } from 'react-icons/ai';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="flex w-full h-full min-h-screen">
      <SideBar />
      <div className="w-full">
        <Header />
        <main className="px-4 py-2">
          <section className="my-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-col py-2 px-4 bg-white w-full max-w-xs rounded-md">
                <div className="flex mb-5">
                  <div className="icon bg-green-trans p-[0.35rem] rounded-md text-action-green">
                    <AiOutlinePieChart size={18} />
                  </div>
                  <div className="select-from"></div>
                </div>

                <div className="flex gap-3 justify-between ">
                  <SectorSummary type="price" name="Sales" figure="300000" />

                  <SectorSummary
                    type="qty"
                    name="Volume"
                    figure="450"
                    percentage={20}
                  />
                </div>
              </div>

              <SummaryCard />
            </div>
          </section>

          <OrderWidget />
        </main>
      </div>
    </div>
  );
};

export default Home;
