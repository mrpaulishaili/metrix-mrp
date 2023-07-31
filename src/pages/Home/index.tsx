import { FC } from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import OrderWidget from '../../components/Orders/OrderWidget';
import SectorSummary from '../../components/Elements/SectorSummary';

import orders from '../../data/orders.json';

import { AiOutlinePieChart } from 'react-icons/ai';
import { IoPeopleOutline } from 'react-icons/io5';
import countItemsWithStatus from '../../utils/countItemsWithStatus';
import calculateSalesTotal from '../../utils/calculateSalesTotal';
import calculateOrderVolume from '../../utils/calculateOrderVolume';

interface HomeProps {}

// const filterOptions = {
//   '24hrs': 'Last 24hrs',
//   today: 'Today',
//   thisWeek: 'This Week',
// };

const Home: FC<HomeProps> = () => {
  return (
    <div className="flex w-full h-full min-h-screen">
      <SideBar />
      <div className="w-full">
        <Header />

        <main className="px-4 py-2">
          <section className="my-2">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Summary 1*/}
              <div className="flex flex-col py-2 px-4 bg-white w-full max-w-xs rounded-md">
                <div className="flex mb-5">
                  <div className="icon bg-green-trans p-[0.35rem] rounded-md text-action-green">
                    <AiOutlinePieChart size={18} />
                  </div>
                  <div className="select-from"></div>
                </div>

                <div className="flex gap-3 justify-between ">
                  <SectorSummary
                    type="price"
                    name="Sales"
                    figure={calculateSalesTotal(orders)}
                  />

                  <SectorSummary
                    type="qty"
                    name="Volume"
                    figure={calculateOrderVolume(orders)}
                    percentage={20}
                  />
                </div>
              </div>

              {/* Summary 2 */}
              <div className="flex flex-col py-2 px-4 bg-white w-full max-w-xs rounded-md">
                <div className="flex mb-5">
                  <div className="icon bg-red-trans p-[0.35rem] rounded-md text-action-red">
                    <IoPeopleOutline size={18} />
                  </div>
                  <div className="select-from"></div>
                </div>

                <div className="flex gap-3 justify-between ">
                  <SectorSummary
                    type="qty"
                    name="Customers"
                    figure="1250"
                    percentage={15.8}
                  />

                  <SectorSummary
                    type="qty"
                    name="Active"
                    figure="1180"
                    percentage={85}
                  />
                </div>
              </div>

              {/* Summary 3 */}
              <div className="flex flex-col py-2 px-4 bg-white w-full max-w-xs rounded-md">
                <div className="flex mb-5">
                  <div className="icon bg-green-trans p-[0.35rem] rounded-md text-action-green">
                    <AiOutlinePieChart size={18} />
                  </div>
                  <div className="select-from"></div>
                </div>

                <div className="flex gap-3 justify-between ">
                  <SectorSummary
                    type="qty"
                    name="All Orders"
                    figure={orders.length}
                  />

                  <SectorSummary
                    type="qty"
                    name="Pending"
                    figure={countItemsWithStatus(orders, 'pending')}
                  />

                  <SectorSummary
                    type="qty"
                    name="Completed"
                    figure={countItemsWithStatus(orders, 'completed')}
                  />
                </div>
              </div>
            </div>
          </section>

          <OrderWidget />
        </main>
      </div>
    </div>
  );
};

export default Home;
