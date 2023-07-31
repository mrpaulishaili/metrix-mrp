import { FC } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

interface DefaultLayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = () => {
  return (
    <div className="flex w-full h-full min-h-screen">
      <SideBar />
      <div className="w-full">
        <Header />

        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
