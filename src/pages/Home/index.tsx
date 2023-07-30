import { FC } from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import OrderWidget from '../../components/Orders/OrderWidget';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className="flex w-full h-full min-h-screen">
      <SideBar />
      <div className="w-full">
        <Header />
        <main className="px-4 py-2">
          <h2>Metrix</h2>

          <OrderWidget />
        </main>
      </div>
    </div>
  );
};

export default Home;
